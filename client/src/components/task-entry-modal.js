import { INPUT_MODAL } from '../../data/constants.js'
import { createModalButtons } from './modal_buttons.js'

export const taskEntryModal = () => {
    const rootDivEl = document.getElementById('root')
    const bodyDivEl = document.createElement('div')
    bodyDivEl.id = "modal-body"
    const formEl = document.createElement('form')

    for (const element of INPUT_MODAL) {
        const pEL = document.createElement('p')
        pEL.innerHTML = element['text']
        const el = document.createElement(element['element'])
        el.type = element['type']
        el.id = element['id']
        el.className = element['className']
        el.value = element['value']
        const brEl = document.createElement('br')
        formEl.appendChild(pEL)
        formEl.appendChild(el)
        formEl.appendChild(brEl)
    }

    bodyDivEl.appendChild(formEl)
    rootDivEl.appendChild(bodyDivEl)
    createModalButtons(bodyDivEl)

    return bodyDivEl
}

