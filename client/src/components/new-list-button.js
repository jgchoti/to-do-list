export const newListButton = () => {
    const container = document.getElementById('table-container')
    const buttonEl = document.createElement('button')
    buttonEl.innerHTML = '+ New'
    container.appendChild(buttonEl)
    return buttonEl;
}