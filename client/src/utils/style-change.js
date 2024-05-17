export const styleChange = (element, isChecked) => {
  const textEl = element.firstElementChild;
  if (isChecked) {
    textEl.classList.add('checked-label');
    textEl.setAttribute('contenteditable', 'false');
    if (textEl.textContent.startsWith('DONE:')) {
      const newText = `<strong>${textEl.textContent.substring(
        0,
        6,
      )}</strong>${textEl.textContent.substring(6)}`;
      textEl.innerHTML = newText;
    } else {
      textEl.innerHTML = `<strong>DONE:</strong> ${textEl.textContent} !`;
    }
  } else {
    textEl.classList.remove('checked-label');
    textEl.setAttribute('contenteditable', 'true');
    if (textEl.textContent.startsWith('DONE')) {
      textEl.textContent = textEl.textContent.slice(6);
      textEl.textContent = textEl.textContent.slice(0, -1);
    }
  }
};
