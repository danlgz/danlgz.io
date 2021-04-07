import { clickToggle, setBodyTheme, DARK_THEME_NAME, LIGHT_THEME_NAME, THEMES } from './themes';
import { setColor, setTheme } from './colorStorage';


export const toggleHandler = () => {
    const $toggle = document.querySelector('#toggle-theme');
    const $body = document.querySelector('body');

    if (!$toggle || !$body) return;

    $toggle.addEventListener('change', (event) => {
        console.log(event)
        const hasDarkTheme = $body.classList.contains(DARK_THEME_NAME);

        $body.classList.remove(...THEMES);

        if (hasDarkTheme) {
            $body.classList.add(LIGHT_THEME_NAME);
            setTheme(LIGHT_THEME_NAME);
            // mozilla save the last state of the checkbox and when the page is realoding load this state
            // fot that, I override value
            event.target.checked = false
        } else {
            $body.classList.add(DARK_THEME_NAME);
            setTheme(DARK_THEME_NAME);
            // mozilla save the last state of the checkbox and when the page is realoding load this state
            // fot that, I override value
            event.target.checked = true
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
            setTheme(event.matches, event.matches ? DARK_THEME_NAME : LIGHT_THEME_NAME)
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
    const $selector = document.querySelector('#selector');

    document.querySelectorAll('.options i.option').forEach($el => {
        $el.addEventListener('click', () => {
            if (!$selector.checked) return;

            // set theme
            const color = $el.getAttribute('title');
            setBodyTheme(color);

            // save color theme
            setColor(color);
        });
    });
}
