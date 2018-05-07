import { createStore, combineReducers } from 'redux';

import inputReducer from './reducers/inputReducer';

const store = createStore (
    combineReducers({ inputReducer }),
    {}
);

export default store;
