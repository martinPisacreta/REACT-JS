export const USER_TYPES = {
    SET_USER_NAME: 'SET_USER_NAME',
    SET_USER_EMAIL: 'SET_USER_EMAIL'
  }


export const setUserName = (userName) => {
        return { //retorna una accion
        type: USER_TYPES.SET_USER_NAME, //la accion tiene un tipo
        payload: { // la accion tiene un payload , que son las propiedades que tiene un objeto de accion
            userName
        }
        }
    }
    
export const setUserEmail = (userEmail) => {
        return { //retorna una accion
        type: USER_TYPES.SET_USER_EMAIL, //la accion tiene un tipo
        payload: { // la accion tiene un payload , que son las propiedades que tiene un objeto de accion
            userEmail
        }
        }
    }