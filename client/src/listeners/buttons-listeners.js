import { CLICK, BUTTONS_HANDLERS } from '../../data/constants.js'


export const buttonsListeners = () => {
    for (const key in BUTTONS_HANDLERS) {
        const buttonEl = document.getElementById(key);
        if (buttonEl) {
            buttonEl.addEventListener(CLICK, BUTTONS_HANDLERS[key]);
        }
    }
};
