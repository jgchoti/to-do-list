import { BUTTONS } from '../../data/constants.js';

export const renderButtons = () => {
	const container = document.getElementById('table-container');
	for (const key in BUTTONS) {
		const buttonEl = document.createElement('button');
		buttonEl.innerHTML = BUTTONS[key];
		buttonEl.id = key;
		container.appendChild(buttonEl);
	}
};
