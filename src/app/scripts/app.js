import { toggleHandler, darkModeChangeHandler, closeThemeSelectorHandler, themeSelectorHandler } from './handlers'
import { readIcons } from './icons'
import { initializeDarkmode, initializeTheme } from './themes'

import '../../assets/styles/main.sass'
import '../../assets/images/danlgz.png'


readIcons();
initializeTheme();
initializeDarkmode();
darkModeChangeHandler();
toggleHandler();
themeSelectorHandler();
closeThemeSelectorHandler();
