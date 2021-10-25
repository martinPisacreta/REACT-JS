import {TODOS_TYPES} from '../actions'


// state = [] -> se va a almacenar aca un arreglo como por ejemplo -> 
    // state = [
       // {
    //     id: 1,
    //     description: 'limpiar cocina',
    //     state: 'PENDING',
    //     commentState: ''
      //  }
       // {
    //     id: 2,
    //     description: 'limpiar pieza',
    //     state: 'PENDING',
    //     commentState: ''
       // }
    // ]

export const todos = (state = [],action) => {
    switch(action.type){
        case TODOS_TYPES.ADD_TODO: //si la accion es ADD_TODO
            return state.concat([  //concateno lo que tiene el state con algo nuevo
            {
                id: action.payload.id,
                description: action.payload.description,
                state: 'PENDING',
                commentState: ''
            }
        ]);
        default: //si no hizo case , devuelvo el state vacio
            return state;
    }
}