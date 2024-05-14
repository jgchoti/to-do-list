import { styleChange } from '../utils/style-change.js'
export const checkedHandlers = (checkboxEl, textInputEl) => {
    let isChecked = false
    const textEl = textInputEl.firstElementChild
    if (checkboxEl.checked) {
        isChecked = true
        styleChange(textInputEl, isChecked)
        textEl.innerHTML = `<strong>DONE:</strong> ${textEl.textContent} !`
    } else {
        styleChange(textInputEl, isChecked)
        if (textEl.textContent.startsWith("DONE")) {
            textEl.textContent = textEl.textContent.slice(6);
            textEl.textContent = textEl.textContent.slice(0, -1);
        }
    }
}
