export const modalToggle = (display) => {
    const modal = document.getElementById('modal-body');
    const rootDivEl = document.getElementById('root')
    if (display) {
        modal.style.display = 'block';
        rootDivEl.classList.add('overlay')
    } else {
        modal.style.display = 'none';
        rootDivEl.classList.remove('overlay')
        document.getElementById('textInput').value = 'Edit Task'
        document.getElementById('dateInput').value = ''
    }
}
