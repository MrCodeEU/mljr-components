# MLJR Components

A collection of Svelte components based on DaisyUI, organized for easy reference and implementation tracking.

## Form Controls

- [x] Button - Actions and choices
- [x] Checkbox - Select/deselect values
- [x] File Input - File upload field
- [x] Text Input - Basic text input field
- [x] Radio - Single option selection
- [x] Range slider - Value selection via sliding (Future make it actual range with two handles)
- [x] Rating - Star-based rating input
- [x] Select - Dropdown option picker
- [x] Textarea - Multi-line text input
- [x] Toggle - Switch-style checkbox
- [x] Fieldset - Form element grouping
- [x] Validator - Form validation styling

## Navigation & Structure

- [x] Accordion - Collapsible content panels
- [x] Breadcrumbs - Navigation path indicator
- [x] Drawer - Side panel navigation
- [x] Dropdown - Click-triggered menus
- [ ] Menu - Vertical/horizontal link lists
- [x] Navbar - Top navigation bar
- [x] Pagination - Page navigation controls
- [x] Steps - Process step indicators
- [x] Tabs - Tabbed content navigation
- [x] Timeline - Chronological event display

## Layout & Containers

- [x] Card - Content grouping boxes
- [x] Collapse - Expandable content
- [x] Divider - Content separator
- [ ] Dock - Bottom navigation bar (Not needed maybe implement later)
- [x] Footer - Page footer content
- [x] Hero - Featured content display
- [x] Join - Element grouping container
- [x] Stack - Z-axis element stacking
- [x] Table - Data grid display

## Feedback & Status

- [x] Alert - Important event notifications
- [x] Badge - Status indicators
- [x] Loading - Loading state animations
- [x] Modal - Dialog boxes
- [x] Progress - Linear progress indicator
- [x] Radial progress - Circular progress
- [x] Skeleton - Loading state placeholder
- [x] Stat - Data/numbers display
- [x] Status - Small status indicators
- [x] Toast - Corner notifications (Close Button alignment broken!)

## Display & Media

- [x] Avatar - User thumbnails (online indicator on placeholder variant not circular???)
- [ ] Calendar - Date display/selection
- [ ] Carousel - Scrollable content
- [ ] Chat bubble - Conversation bubbles
- [ ] Diff - Side-by-side comparison
- [ ] Indicator - Corner element placement
- [ ] Mask - Shape-based content cropping
- [ ] Swap - Element toggle visibility

## Mockups

- [ ] Browser mockup - Browser window simulation
- [ ] Code mockup - Code editor simulation
- [ ] Phone mockup - iPhone device simulation
- [ ] Window mockup - OS window simulation

## Utilities

- [ ] Countdown - Number transition effects
- [ ] Filter - Radio button filtering
- [ ] Kbd - Keyboard shortcut display
- [ ] Label - Input field labels
- [ ] Link - Styled anchor tags
- [ ] List - Vertical information rows
- [ ] Theme Controller - Theme switching control

## Getting Started

```bash
npm install mljr-components
```

## Usage

```svelte
<script>
	import { Button } from 'mljr-components';
</script>

<Button>Click me!</Button>
```
