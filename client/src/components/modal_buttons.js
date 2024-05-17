import { MODAL_BUTTONS } from '../../data/constants.js';

export const createModalButtons = (parentElement) => {
  for (const key in MODAL_BUTTONS) {
    const buttonEl = document.createElement('button');
    buttonEl.innerHTML = MODAL_BUTTONS[key];
    buttonEl.id = key;
    parentElement.appendChild(buttonEl);
  }
};
