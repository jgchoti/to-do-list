import { styleChange } from '../utils/style-change.js';

export const checkedHandlers = (checkboxEl, textInputEl) => {
  let isChecked = false;

  if (checkboxEl.checked) {
    isChecked = true;
    styleChange(textInputEl, isChecked);
  } else {
    styleChange(textInputEl, isChecked);
  }
};
