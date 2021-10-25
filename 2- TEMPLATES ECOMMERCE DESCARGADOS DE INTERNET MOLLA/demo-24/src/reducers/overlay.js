import { INNER_LOADING, OUTER_LOADING } from '../constants/action-types'

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

function overlayReducer( state = {
    isInnerLoading: false,
    isOuterLoading: false,
    type: 'outer'
}, action ) {
    switch ( action.type ) {
        case INNER_LOADING:
            return {
                ...state,
                isInnerLoading: action.loading,
                type: 'inner'
            }

        case OUTER_LOADING:
            return {
                ...state,
                isOuterLoading: action.loading,
                type: 'outer'
            }

        default:
            return state;
    }
}

const persistConfig = {
    keyPrefix: "molla-",
    key: "overlay",
    storage
}

export default persistReducer( persistConfig, overlayReducer );