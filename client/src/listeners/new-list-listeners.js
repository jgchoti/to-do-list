import { NEW_LIST_ID, CLICK } from '../../data/constants.js'
import { newListHandlers } from '../handlers/new-list-handlers.js'
export const newListListeners = () => {
    const newListButton = document.getElementById(NEW_LIST_ID)
    newListButton.addEventListener(CLICK, newListHandlers)
}