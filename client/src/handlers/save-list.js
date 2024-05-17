export const saveList = () => {
	const table = document.getElementById('todo-table');

	const tasks = [];
	for (let i = 0; i < table.rows.length; i++) {
		const statusCheckbox = table.rows[i].cells[0].querySelector(
			'input[type="checkbox"]',
		);
		const task = {
			status: statusCheckbox.checked,
			task: table.rows[i].cells[1].textContent,
			due: table.rows[i].cells[2].querySelector('input[type="date"]').value,
			remove: '',
		};
		tasks.push(task);
	}
	localStorage.setItem('todoList', JSON.stringify(tasks));
	// console.log('saved');
};
