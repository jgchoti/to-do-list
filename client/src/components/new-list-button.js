export const newListButton = () => {
  const container = document.getElementById('table-container');
  const buttonEl = document.createElement('button');
  buttonEl.innerHTML = '+ New';
  buttonEl.id = 'new-list';
  container.appendChild(buttonEl);
  return buttonEl;
};
