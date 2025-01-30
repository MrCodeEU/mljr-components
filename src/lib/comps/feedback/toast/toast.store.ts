import type { Icon } from 'lucide-svelte';
import { writable } from 'svelte/store';

export type ToastType = 'info' | 'success' | 'warning' | 'error' | 'custom';
export type ToastPosition = 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';

export interface ToastAction {
    label: string;
    onClick: () => void;
}

export interface Toast {
    id: string;
    type: ToastType;
    message: string;
    title?: string;
    icon?: typeof Icon;
    duration?: number;
    showProgress?: boolean;
    action?: ToastAction;
    onClose?: () => void;
}

// Remove ToastOptions interface as it's no longer needed

function createToastStore() {
    const timeoutIds = new Map<string, number>();
    const toastMap = new Map<ToastPosition, Toast[]>();
    const positions: ToastPosition[] = [
        'top-start', 'top-center', 'top-end',
        'middle-start', 'middle-center', 'middle-end',
        'bottom-start', 'bottom-center', 'bottom-end'
    ];
    
    // Initialize positions
    positions.forEach(pos => toastMap.set(pos, []));

    const { subscribe, set } = writable<{ [key in ToastPosition]: Toast[] }>(
        positions.reduce((acc, pos) => ({ ...acc, [pos]: [] }), {}) as { [key in ToastPosition]: Toast[] }
    );

    const updateStore = () => {
        const storeValue = Object.fromEntries(
            Array.from(toastMap.entries())
        ) as { [key in ToastPosition]: Toast[] };
        set(storeValue);
    };

    const clearTimeout = (id: string) => {
        const timeoutId = timeoutIds.get(id);
        if (timeoutId) {
            window.clearTimeout(timeoutId);
            timeoutIds.delete(id);
        }
    };

    return {
        subscribe,
        add: (toast: Toast, position: ToastPosition = 'bottom-end') => {
            const positionToasts = toastMap.get(position) ?? [];
            toastMap.set(position, [...positionToasts, toast]);
            updateStore();

            if (toast.duration !== Infinity) {
                const timeoutId = window.setTimeout(() => {
                    const currentToasts = toastMap.get(position) ?? [];
                    toastMap.set(
                        position,
                        currentToasts.filter(t => t.id !== toast.id)
                    );
                    timeoutIds.delete(toast.id);
                    updateStore();
                    toast.onClose?.();
                }, toast.duration ?? 5000);
                
                timeoutIds.set(toast.id, timeoutId);
            }
        },
        remove: (id: string, position: ToastPosition) => {
            clearTimeout(id);
            const currentToasts = toastMap.get(position) ?? [];
            toastMap.set(
                position,
                currentToasts.filter(t => t.id !== id)
            );
            updateStore();
        },
        clear: () => {
            // Clear all timeouts
            timeoutIds.forEach((_, id) => clearTimeout(id));
            timeoutIds.clear();
            
            // Clear all toasts
            positions.forEach(pos => toastMap.set(pos, []));
            updateStore();
        }
    };
}

export const toasts = createToastStore();
