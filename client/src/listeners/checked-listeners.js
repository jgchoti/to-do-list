import { CHANGE } from '../../data/constants.js'
import { checkedHandlers } from '../handlers/checked-handlers.js'

export const checkedListeners = (checkboxEl, textInputEl) => {
    checkboxEl.addEventListener(CHANGE, () => checkedHandlers(checkboxEl, textInputEl))
}







