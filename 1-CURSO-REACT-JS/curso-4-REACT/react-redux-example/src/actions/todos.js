export const TODOS_TYPES = {
    ADD_TODO: 'ADD_TODO'
  }


export const addTodo = (description) => {
    return { //retorna una accion
    type: TODOS_TYPES.ADD_TODO, //la accion tiene un tipo
    
    payload: { // la accion tiene un payload , que son las propiedades que tiene un objeto de accion
        id: new Date().getTime(),
        description
    }
    }
}