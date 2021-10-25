import {createStore, combineReducers} from 'redux'

// agregar a google chrome extesion de redux  https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es


//acciones
const ACTIONS_TYPES = {
    ADD_TODO: 'ADD_TODO',
    SET_USER_NAME: 'SET_USER_NAME',
    SET_USER_EMAIL: 'SET_USER_EMAIL'
  }


// Action creators 
    //lo logico seria crear un archivo de action creators para tareas y otro archivo de action creators para usuario
    //payload -> no es obligatorio , es una forma de estructura el action , atributos necesarios para la accion ... todo action tiene un type y puede tener atributos extras
    const addTodo = (description) => {
        return {
        type: ACTIONS_TYPES.ADD_TODO,
        
        payload: {
            id: new Date().getTime(),
            description
        }
        }
    }
    const setUserName = (userName) => {
        return {
        type: ACTIONS_TYPES.SET_USER_NAME,
        payload: {
            userName
        }
        }
    }
    
    const setUserEmail = (userEmail) => {
        return {
        type: ACTIONS_TYPES.SET_USER_EMAIL,
        payload: {
            userEmail
        }
        }
    }

// Reducers -> reducir el array en una expresion mas simple
    //state puede ser un objeto , un array o un numero
    
    //agarro el state que me viene y con el concat creo una nueva lista y agrego un nuevo elemento.
    const todos = (state = [],action) => {
        switch(action.type){
            case ACTIONS_TYPES.ADD_TODO:
                //lo que tiene el state con algo nuevo
                return state.concat([
                {
                    id: action.payload.id,
                    description: action.payload.description,
                    state: 'PENDING',
                    commentState: ''
                }
            ]);
            default:
                return state;
        }
    }


    const user = (state = {},action) => {
        switch(action.type){
            case ACTIONS_TYPES.SET_USER_EMAIL:
            return {
                // ... -> significa abre el objeto en sus propiedades
                ...state,
                //que propiedades quiero sobreescribir del objeto stete ? por ejemplo el name 
                name: action.payload.userName
            }
            case ACTIONS_TYPES.SET_USER_EMAIL:
            return {
                // ... -> significa abre el objeto en sus propiedades
                ...state,
                //que propiedades quiero sobreescribir del objeto stete ? por ejemplo el email 
                email: action.payload.setUserEmail
            }
            default:
                    return state;
        }
    }

//store
    //combino varias funciones reductoras
    const reducers = combineReducers({
        todos, //tareas
        user //info del usuario de esas tareas
    })

    //creo el store
        //si tengo un solo reducer , pongo directamente el reducer 
        //en caso contrario hago combineReducers
    const store = createStore(
        //use combineReducers porque tengo varias funciones reductoras
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //checkea si la extesion esta instalada en google chome
    );

    //escucho que el estado del store cambio
    store.subscribe(() => {
        console.log(store.getState())
    });

    //dispatch -> disparador de acciones 
    store.dispatch(addTodo('limpiar la cocina'));
    store.dispatch(setUserName('leo'));


 
        
