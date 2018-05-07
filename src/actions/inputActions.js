import  * as types  from './types';

export function addText(textType, text) {
    return {
        type: types.ADD_TEXT,
        text,
        textType
    }
}

export function editText(textType, text) {
    return {
        type: types.EDIT_TEXT,
        text,
        textType
    }
}

export function deleteText(textType, text) {
    return {
        type: types.DELETE_TEXT,
        text,
        textType
    }
}

export function deleteInput() {
    return {
        type: types.DELETE_INPUT
    }
}