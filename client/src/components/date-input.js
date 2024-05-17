export const dateInput = () => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const currentDate = `${year}-${month}-${day}`;
	const dueDate = `${year + 10}-${month}-${day}`;
	const dateInputEl = document.createElement('input');
	dateInputEl.type = 'date';
	dateInputEl.min = currentDate;
	dateInputEl.max = dueDate;
	return dateInputEl;
};
