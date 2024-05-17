export const saveList = () => {
	const table = document.getElementById('todo-table');

	let tasks = [];
	for (var i = 0; i < table.rows.length; i++) {
		var statusCheckbox = table.rows[i].cells[0].querySelector(
			'input[type="checkbox"]',
		);
		var task = {
			status: statusCheckbox.checked,
			task: table.rows[i].cells[1].textContent,
			due: table.rows[i].cells[2].querySelector('input[type="date"]').value,
			remove: '',
		};
		tasks.push(task);
	}
	localStorage.setItem('todoList', JSON.stringify(tasks));
	console.log('saved');
};
