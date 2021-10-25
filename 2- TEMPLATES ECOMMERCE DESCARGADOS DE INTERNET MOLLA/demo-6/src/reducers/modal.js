import * as types from '../constants/action-types'

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

function modalReducer( state = {
    modal: 'login',
    showModal: false,
    newsletterModal: true
}, action ) {
    switch ( action.type ) {
        case types.SHOW_MODAL:
            return {
                ...state,
                showModal: true,
                modal: action.modal
            }

        case types.CLOSE_MODAL:
            return {
                ...state,
                showModal: false,
                modal: action.modal
            }

        case types.REMOVE_NEWSLETTER:
            return {
                ...state,
                newsletterModal: false
            }

        default:
            return state;
    }
}

const persistConfig = {
    keyPrefix: "molla-",
    key: "modal",
    storage
}

export default persistReducer( persistConfig, modalReducer );