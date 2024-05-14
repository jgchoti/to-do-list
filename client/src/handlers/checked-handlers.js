export const checkedHandlers = (checkboxEl) => {
    if (checkboxEl.checked) {
        console.log(`${checkboxEl.id} is checked..`);
    } else {
        console.log(`${checkboxEl.id} is not checked..`);
    }
}