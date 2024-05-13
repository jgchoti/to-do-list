import { state } from "../../data/state.js"
import { TABLE_CLASS_NAME } from "../../data/constants.js"
import { checkbox } from "./checkbox.js"
import { dateInput } from "./date-input.js"

export const createTable = () => {
    const tbodyEl = document.querySelector('tbody');

    const taskItems = state['Task'];

    for (const item of taskItems) {
        const trEl = document.createElement('tr');
        for (const key in state) {
            const tdEl = document.createElement('td');
            trEl.appendChild(tdEl)
            tdEl.classList.add(TABLE_CLASS_NAME[key])
        }

        const tdStatus = trEl.firstElementChild
        const checkboxEl = checkbox()
        tdStatus.appendChild(checkboxEl)

        const tdTask = trEl.children[1]
        tdTask.innerHTML = item

        const tdDue = trEl.children[2]
        const dateInputEl = dateInput()
        tdDue.appendChild(dateInputEl)

        tbodyEl.appendChild(trEl);
    }

};

