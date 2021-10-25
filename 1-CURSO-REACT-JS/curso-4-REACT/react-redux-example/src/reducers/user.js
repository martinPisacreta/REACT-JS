import {USER_TYPES} from '../actions'


// state = [] -> se va a almacenar aca un arreglo como por ejemplo -> 
    // state = [
    //  {
    //     name: 'test''
    //  }
    //  {
    //     name: 'martin'
    //  }
    // ]

export const user = (state = {name: 'test' ,email:'pepe'},action) => {
    switch(action.type){
        case USER_TYPES.SET_USER_EMAIL: //si la accion es SET_USER_EMAIL
        return {
            // ... -> significa abre el objeto en sus propiedades
            ...state,
            //que propiedades quiero sobreescribir del objeto state ? por ejemplo el name 
            name: action.payload.userName
        }
        case USER_TYPES.SET_USER_EMAIL: //si la accion es SET_USER_EMAIL
        return {
            // ... -> significa abre el objeto en sus propiedades
            ...state,
            //que propiedades quiero sobreescribir del objeto state ? por ejemplo el email 
            email: action.payload.setUserEmail
        }
        default: //si no hizo case , devuelvo el state vacio
                return state;
    }
}