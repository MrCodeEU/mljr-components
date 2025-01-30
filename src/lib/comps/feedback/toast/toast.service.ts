import type { ToastPosition, ToastType } from './toast.store.js';
import { toasts } from './toast.store.js';
import TriangleAlert from 'lucide-svelte/icons/triangle-alert';
import CheckCircle from 'lucide-svelte/icons/check-circle';
import XCircle from 'lucide-svelte/icons/x-circle';
import Info from 'lucide-svelte/icons/info';
import { Icon } from 'lucide-svelte';

const defaultIcons: Record<ToastType, typeof Icon> = {
	info: Info,
	success: CheckCircle,
	warning: TriangleAlert,
	error: XCircle
};

interface ToastParams {
	message: string;
	position?: ToastPosition;
	duration?: number;
	showProgress?: boolean;
	title?: string;
	action?: { label: string; onClick: () => void };
	onClose?: () => void;
	icon?: typeof Icon;
}

function createToast(type: ToastType, params: ToastParams) {
	const id = crypto.randomUUID();
	const {
		message,
		position,
		duration = 5000,
		showProgress = true,
		title,
		action,
		onClose,
		icon
	} = params;

	toasts.add(
		{
			id,
			type,
			message,
			icon: icon ?? defaultIcons[type],
			duration,
			showProgress,
			title,
			action,
			onClose
		},
		position
	);
	return id;
}

export const toast = {
	info: (params: Omit<ToastParams, 'type'>) => createToast('info', params),
	success: (params: Omit<ToastParams, 'type'>) => createToast('success', params),
	warning: (params: Omit<ToastParams, 'type'>) => createToast('warning', params),
	error: (params: Omit<ToastParams, 'type'>) => createToast('error', params),
	custom: (params: Omit<ToastParams, 'type'>) => createToast('custom', params),
	remove: (id: string, position: ToastPosition) => toasts.remove(id, position),
	clear: () => toasts.clear()
};
