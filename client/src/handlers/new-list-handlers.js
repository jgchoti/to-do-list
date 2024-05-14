import { createTable } from '../components/table.js'
import { NEW_TASK } from '../../data/constants.js'

export const newListHandlers = () => {
    createTable(NEW_TASK)
}