import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QTY, CHANGE_SHIPPING, REFRESH_STORE } from "../constants/action-types";
import { findIndex } from "../utils";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = {
    cart: [],
    shipping: "free"
}

function cartReducer( state = initialState, action ) {
    switch ( action.type ) {
        case ADD_TO_CART:
            const productId = action.product.id;

            if ( findIndex( state.cart, product => product.id === productId ) !== -1 ) {
                const cart = state.cart.reduce( ( cartAcc, product ) => {
                    if ( product.id === productId ) {
                        cartAcc.push( { ...product, qty: parseInt( product.qty ) + parseInt( action.qty ), sum: ( product.discount ? product.salePrice : product.price ) * ( parseInt( product.qty ) + parseInt( action.qty ) ) } ) // Increment qty
                    } else {
                        cartAcc.push( product )
                    }
                    return cartAcc
                }, [] )

                return { ...state, cart }
            }

            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        ...action.product,
                        qty: action.qty,
                        sum: ( action.product.discount ? action.product.salePrice : action.product.price ) * action.qty
                    }
                ]
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter( item => item.id !== action.productId )
            };

        case CHANGE_QTY:
            const cart = state.cart.reduce( ( cartAcc, product ) => {
                if ( product.id === action.productId ) {
                    cartAcc.push( { ...product, qty: action.qty, sum: ( product.discount ? product.salePrice : product.price ) * action.qty } ) // Increment qty
                } else {
                    cartAcc.push( product )
                }
                return cartAcc;
            }, [] )

            return { ...state, cart };

        case REFRESH_STORE:
            return { ...state, cart: [], shipping: "free" };

        case CHANGE_SHIPPING:
            return { ...state, shipping: action.shipping };

        default:
            return state;
    }
}

const persistConfig = {
    keyPrefix: "molla-",
    key: "cartlist",
    storage
}

export default persistReducer( persistConfig, cartReducer );