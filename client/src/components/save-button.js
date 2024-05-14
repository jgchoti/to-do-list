import { SAVE_ICON, SAVE_BTN_ID } from "../../data/constants.js"

export const saveButton = () => {
    const container = document.getElementById('table-container')
    const buttonEl = document.createElement('button')
    buttonEl.innerHTML = SAVE_ICON
    buttonEl.id = SAVE_BTN_ID
    container.appendChild(buttonEl)
    return buttonEl;
}