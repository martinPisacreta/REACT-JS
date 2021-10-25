import React from 'react';
import './App.css';
import {Provider} from 'react-redux' //engloba todos los componentes que tengan acceso al store 
import store from './store'
import TodoListContainer from './components/TodoListContainer'

function App() {
  return (
    //Provider -> facilita la integracion de redux con componentes de react //en este punto ya estoy usando react-redux
    //{store} -> hace referencia a import store from './store'
    <Provider store={store}> 
      <TodoListContainer />
    </Provider>
  );
}

export default App;
