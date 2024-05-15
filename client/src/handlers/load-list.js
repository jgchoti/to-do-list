import { loadTable } from '../components/render-table.js';
import { NEW_TASK } from '../../data/constants.js'

export const loadList = () => {
    const storedList = JSON.parse(localStorage.getItem("todoList"));

    if (storedList && storedList.length > 0) {
        loadTable(storedList);
        console.log("Todo list loaded successfully!");
    } else {
        loadTable(NEW_TASK)
    }
}
