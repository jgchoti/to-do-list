import { CLICK, MODAL_BUTTONS_HANDLERS } from '../../data/constants.js'


export const modalBtnListeners = () => {
    for (const key in MODAL_BUTTONS_HANDLERS) {
        const buttonEl = document.getElementById(key);
        if (buttonEl) {
            buttonEl.addEventListener(CLICK, MODAL_BUTTONS_HANDLERS[key]);
        }
    }
};
