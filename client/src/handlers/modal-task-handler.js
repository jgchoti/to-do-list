import { state } from '../../data/state.js';
import { renderTable } from '../components/render-table.js';
import { modalToggle } from './modal-toggle.js';
import { saveList } from './save-list.js';

export const modalTaskHandler = () => {
	const taskInput = document.getElementById('textInput').value;
	const dateInput = document.getElementById('dateInput').value;
	const newTask = {
		status: false,
		task: taskInput,
		due: dateInput,
		remove: '',
	};
	state.pop();
	state.push(newTask);

	renderTable(state);
	modalToggle(false);
	saveList();
};
