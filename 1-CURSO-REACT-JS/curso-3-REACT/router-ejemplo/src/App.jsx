import React from 'react';
import {Link,BrowserRouter,Route,Switch, NavLink,Redirect} from 'react-router-dom'
import './App.css';


const styles = {
  active: {
    color: "red"
  },
  link: {
    marginLeft: "20px"
  }
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/contacto">Contacto</Link>

      <ul>
        <ListItemLink to="/noticias" propTest="fsdfsf" />
        <ListItemLink to="/conParametro" />
      </ul>
      <NavLink to="/noticias" style={styles.link} activeStyle={styles.active}>Noticias</NavLink>
      {/* activeStyle={styles.active} -- cuando hago click aca cambia el color */}
      {/* stylee={styles.link} -- estilo que aplico sin hacer click */}

      <NavLink to="/redireccionar" style={styles.link} activeStyle={styles.active}>Redireccionar</NavLink>
      {/* activeStyle={styles.active} -- estilo que aplico cuando hago click aca cambia el color */}
      {/* stylee={styles.link} -- estilo que aplico sin hacer click */}


      <NavLink to="/conParametro/leo" style={styles.link} activeStyle={styles.active}>Con Parametro</NavLink>
      {/* activeStyle={styles.active} -- estilo que aplico cuando hago click aca cambia el color */}
      {/* stylee={styles.link} -- estilo que aplico sin hacer click */}

      <NavLink to="/conParametro" exact style={styles.link} activeStyle={styles.active}>Sin Parametro</NavLink>
      {/* activeStyle={styles.active} -- estilo que aplico cuando hago click aca cambia el color */}
      {/* stylee={styles.link} -- estilo que aplico sin hacer click */}

      <NavLink 
        to={{pathname: '/conParametro', state: {test: 1234}}}
        exact
        style={styles.link}
        activeStyle={styles.active}>
          Sin Parametro con estado
      </NavLink> {/* puedo tener estado anterior a llegar a la vista , a su vez puede agregar un estado que puede obtener la ubicación del componente de ruta */}

      <Switch>
        <Route path="/contacto" component={Contact}/>
        <Route path="/noticias" component={News}/>
        <Route path="/redireccionar" component={RedirectToHome}/>
        <Route path="/conParametro" exact component={WithoutParam} /> {/* 'exact' avoids to show WithoutParam instead of WithParam component route */}
        <Route path="/conParametro/:user" component={WithParam} />
        <Route path="/" exact component={Home}/> 
        <Route  component={NoMatch}/>
      </Switch>
    </BrowserRouter>
  );
}

// del Route siempre se envia como parametro  el match , location y history por defecto 
export const Contact = () => {
  return  <h1>Contacto</h1>
}

// del Route siempre se envia como parametro  el match , location y history por defecto 
export const News = () => {
  return  <h1>Noticias</h1>
}

// del Route siempre se envia como parametro  el match , location y history por defecto 
export const RedirectToHome = () => {
  return <Redirect to="/"/>
  // -- redirecciono al inicio al poner "/"
}


// del Route siempre se envia como parametro  el match , location y history por defecto 
export const WithoutParam = ({match, location, history}) => {
  console.log(location.state)
  console.log(history)
  return <h1>Without param : {match.params.user}</h1>
}

// del Route siempre se envia como parametro  el match , location y history por defecto 
export const WithParam = ({match, location, history}) => {
  return <h1>With param : {match.params.user}</h1>
}

// del Route siempre se envia como parametro  el match , location y history por defecto 
export const Home = () => {
  return  <h1>Pagina inicio</h1>
}

// del Route siempre se envia como parametro  el match , location y history por defecto 
export const NoMatch = () => {
  return  <h1>Pagina no encontrada</h1>
}

// del Route siempre se envia como parametro  el match , location y history por defecto 
export const ListItemLink = ({ to, ...rest }) => (
  // to -> obtengo la propiedad que yo quiero
  // rest -> resto de las propiedades
    <Route
        path={to}
        //children -> se muestra siempre y evita crear el componente desde 0
        // en vez de children, puede ir la palabra render -> se muestra solamente cuando machea , osea que mostrar cierto componente al estar en una ruta en particular
        children={({ match }) => (
          // style={match ? styles.active : null} -> quiere decir que -> solamente pongo estilo cuando match tiene algo(el usuario esta en la ruta) , sino no le pongo estilo
          <li style={match ? styles.active : null}>
            {/* transition -> agrego animacion // transicion de color ->color: match ? "red" : "black" -> quiere decir cuando el usuario esta parado en esta ruta , cambia el color a  red , sino dejalo en black */}
            <h3 style={{transition: "color 1s", color: match ? "red" : 'black'}}>
              {to}
              </h3>
          </li>
    )}
  />
);




export default App;
