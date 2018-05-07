import * as actions from '../actions/inputActions';
import { ADD_TEXT, EDIT_TEXT, DELETE_TEXT, DELETE_INPUT } from '../actions/types';

const inputReducer = (state = {
    PROS: [],
    CONS: [],
    activeColumn: 'PROS' 
}, action) => {
    let textType = state.activeColumn;

    if (action.textType === 'PROS') {
        textType = state.activeColumn;
    }

    switch(action.type) {
        case ADD_TEXT: {
            return {
                ...state,
                activeColumn: action.textType,
                [textType]: state[textType].concat(action.text)
            }
        }
        case EDIT_TEXT: {
            return {
                ...state,
                activeColumn: action.textType,
                [textType]: state[textType].map((text, index) => {
                    if (index === action.index) {
                        return action.text;
                    }
                    return text;
                })
            }
        }
        case DELETE_TEXT: {
            return {
                ...state,
                activeColumn: action.textType,
                [textType]: [
                    ...state[textType].slice(0, action.index),
                    ...state[textType].slice(action.index + 1, textType.length)    
                ]
            }
        }
        case DELETE_INPUT: {
            return {
                ...state,
                activeColumn: action.textType
            }
        }
        default: {
            return state;
        }
    }
}

export default inputReducer;