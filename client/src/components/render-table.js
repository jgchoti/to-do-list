/* eslint-disable boundaries/element-types */
import { TABLE_CLASS_NAME } from '../../data/constants.js';
import { checkbox } from './checkbox.js';
import { dateInput } from './date-input.js';
import { textInput } from './text-input.js';
import { createRemoveButton } from './remove-button.js';
import { generateID } from '../utils/generate-id.js';
import { checkedListeners } from '../listeners/checked-listeners.js';
import { styleChange } from '../utils/style-change.js';

export const renderTable = (list) => {
	const tbodyEl = document.getElementById('todo-table');

	for (let i = 0; i < list.length; i++) {
		const trEl = document.createElement('tr');
		const taskId = generateID();
		for (const key in list[i]) {
			const tdEl = document.createElement('td');
			trEl.appendChild(tdEl);
			tdEl.classList.add(TABLE_CLASS_NAME[key]);
		}

		tbodyEl.appendChild(trEl);
		const tdStatus = trEl.firstElementChild;
		const isChecked = list[i].status;
		const checkboxEl = checkbox(taskId, isChecked);
		tdStatus.appendChild(checkboxEl);

		const tdTask = trEl.children[1];
		const textEl = textInput(list[i].task, taskId);

		tdTask.appendChild(textEl);

		checkedListeners(checkboxEl, textEl);
		styleChange(textEl, isChecked);

		const tdDue = trEl.children[2];
		const dateInputEl = dateInput();
		dateInputEl.value = list[i].due;
		tdDue.appendChild(dateInputEl);

		const tdRemove = trEl.lastElementChild;
		const removeBtnEl = createRemoveButton(tdRemove);
		tdRemove.appendChild(removeBtnEl);
	}
};
