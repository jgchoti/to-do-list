import { createTable } from '../components/table.js';
import { loadTable } from '../components/load-table.js';
export const loadList = () => {
    const storedList = JSON.parse(localStorage.getItem("todoList"));

    if (storedList && storedList.length > 0) {
        loadTable(storedList);
        console.log("Todo list loaded successfully!");
    } else {
        createTable()
    }
}
