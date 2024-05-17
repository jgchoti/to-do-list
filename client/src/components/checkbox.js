export const checkbox = (id, isChecked = false) => {
  const checkboxEl = document.createElement('input');
  const element = 'checkbox';
  checkboxEl.type = element;
  checkboxEl.classList.add(element);
  checkboxEl.id = id;
  checkboxEl.value = id;
  if (isChecked) {
    checkboxEl.checked = true;
  }
  return checkboxEl;
};
