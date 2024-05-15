import { tableHeader } from './components/table-header.js'
import { header } from './components/header.js'
import { newListButton } from './components/new-list-button.js'
import { newListListeners } from './listeners/new-list-listeners.js'
import { saveList } from './handlers/save-list.js'
import { state } from '../data/state.js'
import { loadList } from './handlers/load-list.js'
import { saveButton } from './components/save-button.js'
import { saveButtonListeners } from './listeners/save-listeners.js'
import { resetButton } from './components/reset-button.js'
import { resetListeners } from './listeners/reset-listeners.js'
import { createButtons } from './components/buttons.js'
import { buttonsListeners } from './listeners/buttons-listeners.js'

tableHeader()
header()
loadList()
createButtons()
buttonsListeners()

// newListButton()
// saveButton()
// resetButton()
// newListListeners()
// saveButtonListeners()
// resetListeners()
