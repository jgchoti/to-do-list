import { TABLE_CLASS_NAME } from "../../data/constants.js";
import { checkbox } from "./checkbox.js";
import { dateInput } from "./date-input.js";
import { textInput } from "./text-input.js";
import { createRemoveButton } from './remove-button.js';
import { generateID } from '../utils/generate-id.js';
import { checkedListeners } from "../listeners/checked-listeners.js";
import { NEW_TASK } from "../../data/constants.js";


export const createTable = () => {
    const tbodyEl = document.getElementById('todo-table');
    let taskItems = NEW_TASK['task'];
    let object = NEW_TASK

    for (const item of taskItems) {
        const trEl = document.createElement('tr');
        const taskId = generateID();
        for (const key in object) {
            const tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            tdEl.classList.add(TABLE_CLASS_NAME[key]);
        }
        tbodyEl.appendChild(trEl);

        const tdStatus = trEl.firstElementChild;
        const checkboxEl = checkbox(taskId);
        tdStatus.appendChild(checkboxEl);

        const tdTask = trEl.children[1];
        const textEl = textInput(item, taskId); // Adjusted to pass item directly
        tdTask.appendChild(textEl);

        checkedListeners(checkboxEl, textEl);

        const tdDue = trEl.children[2];
        const dateInputEl = dateInput();
        tdDue.appendChild(dateInputEl);

        const tdRemove = trEl.lastElementChild;
        const removeBtnEl = createRemoveButton(tdRemove);
        tdRemove.appendChild(removeBtnEl);

    }
};
