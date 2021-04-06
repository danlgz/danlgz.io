import { toggleHandler, darkModeChangeHandler, closeThemeSelectorHandler, themeSelectorHandler } from './handlers'
import { readIcons } from './icons'
import { initilizeDarkmode } from './darkmode'

import '../../assets/styles/main.sass'
import '../../assets/images/danlgz.png'


readIcons();
initilizeDarkmode();
darkModeChangeHandler();
toggleHandler();
themeSelectorHandler();
closeThemeSelectorHandler();
