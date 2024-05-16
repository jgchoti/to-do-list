import { tableContainer } from './components/table-container.js'
import { loadList } from './handlers/load-list.js'
import { createButtons } from './components/buttons.js'
import { buttonsListeners } from './listeners/buttons-listeners.js'
import { modal } from './components/modal.js'


tableContainer()
loadList()
createButtons()
modal()
buttonsListeners()

