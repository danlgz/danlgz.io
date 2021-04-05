
const trigger = () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (!prefersDarkScheme.matches) return;

    clickToggle();
}

export const clickToggle = () => {
    const $toggle = document.querySelector('#toggle-theme');
    if (!$toggle) return;

    $toggle.click();
}

export const initilizeDarkmode = () => {
    setTimeout(trigger, 500);
}
