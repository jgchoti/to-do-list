import { NEW_TASK } from "../../data/constants.js"
import { TABLE_HEAD_ID } from "../../data/constants.js"
import { TABLE_CONTAINER_ID } from "../../data/constants.js"

export const tableHeader = () => {
    const container = document.getElementById('root')
    const tableContainer = document.createElement('div')
    tableContainer.id = TABLE_CONTAINER_ID
    const tableEl = document.createElement('table')
    const theadEl = document.createElement('thead')
    const tbodyEl = document.createElement('tbody')
    tbodyEl.id = 'todo-table'
    for (const key in NEW_TASK) {
        const thEl = document.createElement('th')
        thEl.innerHTML = `${key.toUpperCase()}`
        thEl.id = TABLE_HEAD_ID[key]
        theadEl.appendChild(thEl)
    }
    tableEl.appendChild(theadEl)
    tableEl.appendChild(tbodyEl)
    tableContainer.appendChild(tableEl)
    container.appendChild(tableContainer)
    return tableContainer
}
