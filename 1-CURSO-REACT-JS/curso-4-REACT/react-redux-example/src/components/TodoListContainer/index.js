import React, { PureComponent, Fragment } from 'react'
import { addTodo } from '../../actions'
import { connect } from 'react-redux';


class TodoListContainer extends PureComponent {
  state = {
    value: ''
  }

  onChange = (e) => {
      //cuando escribo algo en el input , el valor de 'value' se va a ir cambiando depende lo que escriba
      this.setState({value: e.target.value});
  }

  onKeyDown = (e) => {
      if (e.key === 'Enter') {
          //si aprieto enter , voy a llamar a la prop que cargo mapDispatchToProps , que es addTodo , y le paso el valor del input
          this.props.addTodo(this.state.value);
          //luego de eso seteo en vacio el state 'value'
          this.setState({value: ''});
      } 
  }

  render() {
      return <Fragment>
          {/* mapStateToProps me cargo dos props , 'todos' y 'user' .... en base a eso puedo acceder a this.props.user.name  o {this.props.user.email} (ver el valor en reducers/user.js) */}
          {this.props.user.name} - {this.props.user.email} <br />
          
          <input value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown} type="text" />

          {/* voy a llamar a la prop que cargo mapStateToProps , que es 'todos' , y muestro todos los valores de 'todos' */}
          {this.props.todos.map(t => <div key={t.id}> {t.description} </div>)}
      </Fragment>
  }
}

//es una funcion que devuelve estados
//recibe un estado (son los reducers de nuestro store)
    //dentro de stores/index.js , tengo los siguiente reducers -> reducers (hace referencia a la combinacion de reducers ->  todos y user -> ver reducers/index.js )
const mapStateToProps = (state) => {
  return { //cualquier cosa que retorno aca , va a estar disponible como propiedad (props) en nuestro componente
    todos: state.todos,
    user: state.user
  }
}


// es una funcion que devuelve acciones
// recibo un dispatch (disparador de accion)
const mapDispatchToProps = (dispatch) => {
  return { //cualquier cosa que retorno aca , va a estar disponible como propiedad (props) en nuestro componente
    addTodo: (description) => { dispatch(addTodo(description)) } 
    // : (description) -> es lo que recibe la funcion
    // dispatch(addTodo(description))  -> quiere decir que ejecuto la accion addTodo con lo que recibe la funcion , osea con description
  }
}


  
//mapStateToProps -> (asocia los states nuevos al componente) 
//mapDispatchToProps -> (asocia los eventos nuevos al componente )
// la parte que dice (TodoListContainer) -> hace referencia a que componente va a modificar y devuelve el componente modificado
//connect -> nos devuelve el componente modificado que engloba el nuestro
export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);

