import { checkedListeners } from "../listeners/checked-listeners.js";

export const checkbox = (id) => {
    const checkboxEl = document.createElement('input')
    const element = 'checkbox'
    checkboxEl.type = element
    checkboxEl.id = id
    checkboxEl.value = id
    checkedListeners(checkboxEl)
    return checkboxEl;
}