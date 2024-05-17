export const textInput = (text) => {
  const labelEl = document.createElement('label');
  const pEl = document.createElement('p');
  pEl.innerText = text;
  pEl.setAttribute('contenteditable', 'true');
  // labelEl.setAttribute('for', taskId);
  labelEl.appendChild(pEl);
  return labelEl;
};
