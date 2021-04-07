import { getColor, getTheme, setTheme } from './colorStorage';


export const DARK_THEME_NAME = 'dark-theme';
export const LIGHT_THEME_NAME = 'light-theme';

export const COLORS = ['blue', 'yellow', 'red'];
export const THEMES = [DARK_THEME_NAME, LIGHT_THEME_NAME];

export const setBodyTheme = (theme) => {
    const $body = document.querySelector('body');

    $body.classList.remove(...COLORS);
    $body.classList.add(theme);
}

const trigger = () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = getTheme();
    let click = click = prefersDarkScheme.matches

    if (!!currentTheme) click = currentTheme == DARK_THEME_NAME;

    if (click) clickToggle();
}

export const clickToggle = () => {
    const $toggle = document.querySelector('#toggle-theme');
    if (!$toggle) return;

    $toggle.click();
}

export const initializeDarkmode = () => {
    setTimeout(trigger, 0);
}

export const initializeTheme = () => {
    const color = getColor();

    if (!color) return;

    setBodyTheme(color);
}
