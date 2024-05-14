import { SAVE_BTN_ID, CLICK } from '../../data/constants.js'
import { saveList } from '../handlers/save-list.js'

export const saveButtonListeners = () => {
    const saveButton = document.getElementById(SAVE_BTN_ID)
    saveButton.addEventListener(CLICK, saveList)
}