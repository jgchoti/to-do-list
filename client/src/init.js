import { tableContainer } from './components/table-container.js';
import { loadList } from './handlers/load-list.js';
import { renderButtons } from './components/render-buttons.js';
import { buttonsListeners } from './listeners/buttons-listeners.js';
import { taskEntryModal } from './components/task-entry-modal.js';

tableContainer();
loadList();
renderButtons();
taskEntryModal();
buttonsListeners();
