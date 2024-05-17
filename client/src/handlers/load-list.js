import { renderTable } from '../components/render-table.js';
import { state } from '../../data/state.js';

export const loadList = () => {
	const storedList = JSON.parse(localStorage.getItem('todoList'));

	if (storedList && storedList.length > 0) {
		renderTable(storedList);
		console.log('Todo list loaded successfully!');
	} else {
		renderTable(state);
	}
};
