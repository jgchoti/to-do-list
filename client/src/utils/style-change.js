export const styleChange = (element, isChecked) => {
    if (isChecked) {
        element.classList.add('checked-label');
        element.firstElementChild.setAttribute('contenteditable', 'false');
    } else {
        element.classList.remove('checked-label');
        element.firstElementChild.setAttribute('contenteditable', 'true');
    }
}