export const styleChange = (element, isChecked) => {
    if (isChecked) {
        element.classList.add('checked-label');
    } else {
        element.classList.remove('checked-label');
    }
}