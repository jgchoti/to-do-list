import { CHANGE } from '../../data/constants.js'
import { checkedHandlers } from '../handlers/checked-handlers.js'

export const checkedListeners = (checkboxEl, textInputEl) => {

    checkboxEl.addEventListener(CHANGE, (event) => {
        if (event.target === checkboxEl) {
            checkedHandlers(checkboxEl, textInputEl);
        }
        console.log(event.target)
    })
}






