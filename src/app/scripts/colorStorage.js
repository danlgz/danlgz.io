
const COLOR_KEY = 'color-theme';
const THEME_KEY = 'theme';

export const setColor = (color) => localStorage.setItem(COLOR_KEY, color);
export const getColor = () => localStorage.getItem(COLOR_KEY);

export const setTheme = (theme) => localStorage.setItem(THEME_KEY, theme);
export const getTheme = () => localStorage.getItem(THEME_KEY);
