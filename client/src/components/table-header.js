import { TABLE_HEAD_ID } from '../../data/constants.js';

export const tableHeader = () => {
  const listContainer = document.getElementById('table-container');
  const tableEl = document.createElement('table');
  const theadEl = document.createElement('thead');
  const tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'todo-table';
  for (const key in TABLE_HEAD_ID) {
    const thEl = document.createElement('th');
    thEl.innerHTML = `${key.toUpperCase()}`;
    thEl.id = TABLE_HEAD_ID[key];
    theadEl.appendChild(thEl);
  }
  tableEl.appendChild(theadEl);
  tableEl.appendChild(tbodyEl);
  listContainer.appendChild(tableEl);
  return listContainer;
};
