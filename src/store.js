import { createStore, combineReducers } from 'redux';

import inputReducer from './reducers/inputReducer';

console.log(2222)
const store = createStore (
    combineReducers({ inputReducer }),
    {}
);
console.log(33333)

export default store;
