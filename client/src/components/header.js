import { TEXT_HEADER } from '../../data/constants.js';

export const header = () => {
	const h1El = document.createElement('h1');
	const container = document.getElementById('table-container');
	h1El.innerText = TEXT_HEADER;
	container.insertBefore(h1El, container.firstElementChild);
	return h1El;
};
