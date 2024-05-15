import { NEW_TASK } from '../../data/constants.js'
import { loadTable } from '../components/render-table.js'

export const newListHandlers = () => {
    loadTable(NEW_TASK)
}