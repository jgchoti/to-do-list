export const styleChange = (element, isChecked) => {
    if (element.textContent.startsWith("DONE:")) {
        const newText = `<strong>${element.textContent.substring(0, 6)}</strong>${element.textContent.substring(6)}`;
        element.innerHTML = newText;
    }
    if (isChecked) {
        element.classList.add('checked-label');
        element.firstElementChild.setAttribute('contenteditable', 'false');
    } else {
        element.classList.remove('checked-label');
        element.firstElementChild.setAttribute('contenteditable', 'true');
    }
}