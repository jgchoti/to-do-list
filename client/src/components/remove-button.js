/* eslint-disable boundaries/element-types */
import { BIN_ICON, REMOVE_BTN_CLASS } from '../../data/constants.js';
import { removeButtonListeners } from '../listeners/remove-listeners.js';

export const createRemoveButton = () => {
  const buttonEl = document.createElement('button');
  buttonEl.innerHTML = BIN_ICON;
  buttonEl.classList.add(REMOVE_BTN_CLASS);
  removeButtonListeners(buttonEl);
  return buttonEl;
};
