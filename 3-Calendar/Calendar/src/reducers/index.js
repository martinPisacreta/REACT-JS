import { combineReducers } from 'redux';


import remindersReducer from './remindersReducer';


const rootReducer = combineReducers( {
    remindersReducer
} );

export default rootReducer;