import { RESET_ICON, RESET_BTN_ID } from '../../data/constants.js';

export const resetButton = () => {
  const container = document.getElementById('table-container');
  const buttonEl = document.createElement('button');
  buttonEl.innerHTML = RESET_ICON;
  buttonEl.id = RESET_BTN_ID;
  container.appendChild(buttonEl);
  return buttonEl;
};
