import { state } from "../../data/state.js";
import { loadTable } from "../components/render-table.js";
import { modalToggle } from "./modal-toggle.js";

export const modalTaskHandler = () => {
    const taskInput = document.getElementById('textInput').value;
    const dateInput = document.getElementById('dateInput').value;
    const newTask = {
        status: false,
        task: taskInput,
        due: dateInput,
        remove: ''
    };
    state.pop();
    state.push(newTask);
    loadTable(state);
    modalToggle(false);
};
