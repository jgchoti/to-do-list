export const modalToggle = (display) => {
	const rootDivEl = document.getElementById('root');
	const modal = document.getElementById('modal-body');

	if (display) {
		modal.style.display = 'block';
		rootDivEl.classList.add('overlay');
	} else {
		modal.style.display = 'none';
		rootDivEl.classList.remove('overlay');
		document.getElementById('textInput').value = 'Edit Task';
		document.getElementById('dateInput').value = '';
	}
};
