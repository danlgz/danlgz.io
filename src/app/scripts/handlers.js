import { clickToggle } from './darkmode';

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

export const darkModeChangeHandler = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const $body = document.querySelector('body');
        if (
            (
                event.matches && $body.classList.contains(LIGHT_THEME_NAME)
            ) || (
                !event.matches && $body.classList.contains(DARK_THEME_NAME)
            )
        ) {
            clickToggle();
        }
    });
}


export const closeThemeSelectorHandler = () => {
    const $selector = document.querySelector('#selector');

    document.addEventListener('click', () => {
        if ($selector.checked) $selector.click();
    });

    document.querySelector('.selector').addEventListener('click', event => event.stopPropagation());
}

export const themeSelectorHandler = () => {
    const $body = document.querySelector('body');
    const $selector = document.querySelector('#selector');
    const classes = ['blue', 'yellow', 'red']

    document.querySelectorAll('.options i.option').forEach($el => {
        $el.addEventListener('click', () => {
            if (!$selector.checked) return;

            $body.classList.remove(...classes);
            $body.classList.add($el.getAttribute('title'));
        });
    });
}
