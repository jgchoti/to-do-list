import { TABLE_CONTAINER_ID } from '../../data/constants.js';
import { header } from './header.js';
import { tableHeader } from './table-header.js';

export const tableContainer = () => {
  const rootContainer = document.getElementById('root');
  const divEl = document.createElement('div');
  divEl.id = TABLE_CONTAINER_ID;
  rootContainer.appendChild(divEl);

  header();
  tableHeader();

  return divEl;
};
