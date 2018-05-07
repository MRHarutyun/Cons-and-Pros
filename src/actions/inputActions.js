import { ADD_TEXT, EDIT_TEXT, DELETE_TEXT } from './types'

export function addText(textType, text) {
    return {
        type: ADD_TEXT,
        text,
        textType
    }
}

export function editText(textType, text) {
    return {
        type: EDIT_TEXT,
        text,
        textType
    }
}

export function deleteText(textType, id) {
    return {
        type: DELETE_TEXT,
        id,
        textType
    }
}
