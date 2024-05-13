export const dateInput = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    let dueDate = `${year + 10}-${month}-${day}`;
    const dateInputEl = document.createElement('input')
    dateInputEl.type = "date"
    dateInputEl.min = currentDate
    dateInputEl.max = dueDate
    return dateInputEl

}

