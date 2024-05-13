import { state } from "../../data/state.js"
import { TABLE_HEAD_ID } from "../../data/constants.js"
export const tableHeader = () => {
    const container = document.getElementById('root')
    const tableEl = document.createElement('table')
    const theadEl = document.createElement('thead')
    const tbodyEl = document.createElement('tbody')
    for (const key in state) {
        const thEl = document.createElement('th')
        thEl.innerHTML = key
        thEl.id = TABLE_HEAD_ID[key]
        theadEl.appendChild(thEl)
    }
    tableEl.appendChild(theadEl)
    tableEl.appendChild(tbodyEl)
    container.appendChild(tableEl)
    return tableEl
}
