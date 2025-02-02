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
- [ ] Calendar - Date display/selection (in the future hopefully? For now only Browser date picker)
- [x] Carousel - Scrollable content
- [x] Chat bubble - Conversation bubbles
- [x] Diff - Side-by-side comparison (Appears to be create correct html code but not working????)
- [x] Indicator - Corner element placement
- [x] Mask - Shape-based content cropping (only CSS Class no Component as it makes no sense)
- [x] Swap - Element toggle visibility

## Mockups

- [x] Browser mockup - Browser window simulation
- [x] Code mockup - Code editor simulation
- [x] Phone mockup - iPhone device simulation
- [x] Window mockup - OS window simulation

## Utilities

- [x] Countdown - Number transition effects
- [x] Filter - Radio button filtering
- [x] Kbd - Keyboard shortcut display
- [x] Label - Input field labels
- [x] Link - Styled anchor tags
- [x] List - Vertical information rows
- [x] Theme Controller - Theme switching control (Only works for light and dark mode)

## Prebuilt compount components
- [ ] Login
- [ ] Register
- [ ] Password Reset
- [ ] Navbar
- [ ] Footer
- [ ] Hero Element
- [ ] Dynamic form generator (from JSON schema)
- [ ] Cookie consent banner
- [ ] Account settings panel + place for app specific settings and stats etc.?
- [ ] ...?

## Advanced Components / non DaisyUI Components
- [ ] Rich text Editor
- [ ] Video Player
- [ ] Custom Date / time picker ?? (e.g. https://svelty-picker.vercel.app/)
- [ ] Color Picker
- [ ] Data Graphs ( simple premade graphs for library? )
- [ ] PIN (like OTP)
- [ ] Auto Complete
- [ ] Table of Content
- [ ] Lazy Loading?
- [ ] Image Compare (as Diff does not work?)
- [ ] Map (maplibre, openmap, etc?)
- [ ] Marquee
- [ ] Svelte Filepond (advance file upload with preview to replace current one or as advanced version?)
- [ ] svelte PDF (for bachelor thesis?)
- [ ] animated headline?
- [ ] Animations?
- [ ] mCaptha? else Turnstile
- [ ] Audio Visualiser
- [ ] Svelte Origami (3d animations)?
- [ ] auto animate: https://auto-animate.formkit.com/ ???
- [ ] ...

## TODO
- [ ] Navbar mobile verison + Hamburger
- [ ] check mobile use of every component
- [ ] Fix missing or slightly broken Components
- [ ] ...

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
