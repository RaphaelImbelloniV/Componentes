// Global loader helper: toggles body.loading class
export const Loader = {
    start() { document.body.classList.add('rc-loading'); },
    stop() { document.body.classList.remove('rc-loading'); },
    toggle() { document.body.classList.toggle('rc-loading'); }
};
