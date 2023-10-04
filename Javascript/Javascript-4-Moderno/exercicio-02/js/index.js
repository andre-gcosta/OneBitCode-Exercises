import calculate from './calculate.js'
import themeSwitcher from './theme-switcher.js'
import clear from './clear.js'
import copy from './copy.js'
import { getKeyFromKeyboard, getKeyBtn } from './key-capture.js'

document.querySelectorAll('.charKey').forEach(getKeyBtn)
input.addEventListener('keydown', getKeyFromKeyboard)
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copy)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)