import { ADD_TEXT, EDIT_TEXT, DELETE_TEXT } from '../actions/types';

const inputReducer = (state = {
    PROS: [],
    CONS: []
}, action) => {
    const { textType } = action;

    switch(action.type) {
        case ADD_TEXT: {
            return {
                ...state,
                [textType]: [...state[textType], action.text]
            }
        }
        case EDIT_TEXT: {
          let editedListItem = state[action.textType];

          return {
              ...state,
              [textType]: editedListItem.map(item => {
                      if(item.id === action.text.id) {
                          return action.text;
                      }
                      return item;
                  }
              )
          }
        }
        case DELETE_TEXT: {
            let deletedListItem = state[textType];

            let index = deletedListItem.findIndex(listItem =>
                listItem.id === action.id
            );

            return {
                ...state,
                [textType]: [...deletedListItem.slice(0, index), ...deletedListItem.slice(index + 1, deletedListItem.length)]
            }
        }

        default: {
            return state;
        }
    }
}

export default inputReducer;
