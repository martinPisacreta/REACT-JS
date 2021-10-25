import reducers from '../reducers';
import {createStore} from 'redux';

export default createStore(
    reducers, //es lo que exporta reducers/index,js
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //checkea si la extesion esta instalada en google chome
)