// Grid Auto Resize helper
// Usage: import { autoGrid } from './grid-auto-resize.js'
// Call once on load and on window resize: autoGrid(container, minWidth)
export function autoGrid(container, cardMinWidth = 200) {
    if (!container) return;
    const cols = Math.max(1, Math.floor(container.offsetWidth / cardMinWidth));
    container.style.setProperty('--rc-grid-columns', cols);
    // optional: set poster height variable
    container.closest('body')?.style?.setProperty('--rc-poster-height', (container.offsetWidth / cols) + 'px');
}
