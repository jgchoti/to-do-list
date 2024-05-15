import { INPUT_MODEL } from '../../data/constants.js'

export const model = () => {
    const bodyDivEl = document.createElement('div')
    bodyDivEl.classList.add("modal-body")
    const formEl = document.createElement('form')

    for (const element of INPUT_MODEL) {
        const pEL = document.createElement('p')
        pEL.innerHTML = element[text]
        const el = document.createElement(INPUT_MODEL[element])
        el.type = element[type]
        el.id = element[id]
        el.className = element[className]
        formEl.appendChild(pEL)
        formEl.appendChild(el)
    }


    bodyDivEl.appendChild(formEl)
}

