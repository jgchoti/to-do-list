import { CLICK, REMOVE_BTN_CLASS } from '../../data/constants.js'
import { removeHandlers } from '../handlers/remove-handlers.js'

export const removeButtonListeners = (removeButton) => {
    removeButton.addEventListener(CLICK, (event) => {
        removeHandlers(event)
    })
}