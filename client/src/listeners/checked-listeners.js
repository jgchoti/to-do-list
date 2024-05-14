import { CHANGE } from '../../data/constants.js'
import { checkedHandlers } from '../handlers/checked-handlers.js'

export const checkedListeners = (checkbox) => {
    checkbox.addEventListener(CHANGE, checkedHandlers)
}







