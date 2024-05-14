import { CLICK, BUTTONS_HANDLERS } from '../../data/constants.js'
import { saveList } from '../handlers/save-list.js';
import { newListHandlers } from '../handlers/new-list-handlers.js';
import { reset } from '../handlers/reset.js';

export const buttonsListeners = () => {
    for (const key in BUTTONS_HANDLERS) {
        const buttonEl = document.getElementById(key);
        if (buttonEl) {
            buttonEl.addEventListener('click', BUTTONS_HANDLERS[key]);
        } else {
            console.error(`Button with id '${key}' not found.`);
        }
    }
};
