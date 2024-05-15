export const styleChange = (element, isChecked) => {
    const textEl = element.firstElementChild
    if (isChecked) {
        textEl.classList.add('checked-label');
        textEl.setAttribute('contenteditable', 'false');
        if (textEl.textContent.startsWith("DONE:")) {
            const newText = `<strong>${textEl.textContent.substring(0, 6)}</strong>${textEl.textContent.substring(6)}`;
            textEl.innerHTML = newText;
        }
    } else {
        textEl.classList.remove('checked-label');
        textEl.setAttribute('contenteditable', 'true');
    }
}