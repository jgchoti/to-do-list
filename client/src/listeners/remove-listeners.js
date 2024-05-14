import { CLICK } from '../../data/constants.js'
import { removeHandlers } from '../handlers/remove-handlers.js'

export const removeButtonListeners = (removeButton) => {
    removeButton.addEventListener(CLICK, (event) => {
        removeHandlers(event)
        localStorage.clear();
    })
}