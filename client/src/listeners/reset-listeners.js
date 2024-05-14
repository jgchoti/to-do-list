import { RESET_BTN_ID, CLICK } from '../../data/constants.js'
import { reset } from '../handlers/reset.js'

export const resetListeners = () => {
    const button = document.getElementById(RESET_BTN_ID)
    button.addEventListener(CLICK, reset)
}