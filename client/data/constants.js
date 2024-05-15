import { saveList } from '../../client/src/handlers/save-list.js';
import { newListHandlers } from '../../client/src/handlers/new-list-handlers.js';
import { reset } from '../../client/src/handlers/reset.js';
import { modalTaskHandler } from '../src/handlers/modal-task-handler.js'
import { modalCancelHandler } from '../src/handlers/modal-cancel-handler.js'
// event types 
export const CLICK = 'click'
export const CHANGE = 'change'
// IDs
export const TABLE_HEAD_ID = {
    'status': 'status-id',
    'task': 'task-id',
    'due': 'due-id',
    'remove': 'remove-id'
}

export const TABLE_CONTAINER_ID = 'table-container'
export const NEW_LIST_ID = 'new-list'
export const SAVE_BTN_ID = 'save-btn'
export const RESET_BTN_ID = 'reset-btn'

// classes
export const TABLE_CLASS_NAME = {
    'status': 'status',
    'task': 'task',
    'due': 'due',
    'remove': 'remove'
}
export const REMOVE_BTN_CLASS = 'remove-btn'


// ... other things?
export const TEXT_HEADER = 'TO-DO LIST'
export const BIN_ICON = '<i class="fa-solid fa-trash-can"></i>'
export const SAVE_ICON = '<i class="fa-solid fa-floppy-disk"></i>'
export const RESET_ICON = '<i class="fa-solid fa-arrow-rotate-left"></i >'


export const NEW_TASK = [
    {
        'status': false,
        'task': 'Click to Edit',
        'due': '',
        'remove': ''
    }
]



export const BUTTONS = {
    'new-list': '+ New',
    'save-btn': '<i class="fa-solid fa-floppy-disk"></i>',
    'reset-btn': '<i class="fa-solid fa-arrow-rotate-left"></i >'
};


export const MODAL_BUTTONS = {
    'modal-add': '<i class="fa-solid fa-plus"></i>',
    'modal-cancel': '<i class="fa-solid fa-xmark"></i>'
};


export const BUTTONS_HANDLERS = {
    'new-list': newListHandlers,
    'save-btn': saveList,
    'reset-btn': reset
};

export const MODAL_BUTTONS_HANDLERS = {
    'modal-add': modalTaskHandler,
    'modal-cancel': modalCancelHandler,
};


export const INPUT_MODAL = [
    {
        element: 'input',
        text: "Task",
        type: "text",
        className: "form-modal",
        id: "textInput",

    }, {
        element: 'input',
        text: "Due Date",
        type: "date",
        className: "form-modal",
        id: "dateInput",

    },
]
