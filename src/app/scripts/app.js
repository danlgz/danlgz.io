import { toggleHandler, darkModeChangeHandler } from './handlers'
import { readIcons } from './icons'
import { initilizeDarkmode } from './darkmode'

import '../../assets/styles/main.sass'
import '../../assets/images/danlgz.svg'


readIcons();
initilizeDarkmode();
darkModeChangeHandler();
toggleHandler();
