
const DARK_THEME_NAME = 'dark-theme';
const LIGHT_THEME_NAME = 'light-theme';


export const toggleHandler = () => {
    const $toggle = document.querySelector('#toggle-theme');
    const $body = document.querySelector('body');

    if (!$toggle || !$body) return;

    $toggle.addEventListener('change', () => {
        const hasDarkTheme = $body.classList.contains(DARK_THEME_NAME);

        if (hasDarkTheme) {
            $body.classList.remove(DARK_THEME_NAME);
            $body.classList.add(LIGHT_THEME_NAME);
        } else {
            $body.classList.remove(LIGHT_THEME_NAME);
            $body.classList.add(DARK_THEME_NAME);
        }
    });
}
