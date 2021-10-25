import React from 'react';
import {Link,BrowserRouter,Route,Switch, NavLink,Redirect} from 'react-router-dom'
import './App.css';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { CssBaseline, Container,Grid } from '@material-ui/core';
import Header from './components/Header'
import Menu from './components/Menu'

//definir el tema primero (es opcional esto)

const theme = createMuiTheme({
  //paleta de colores que voy a usar , oscuros o claros , puede ser dark o light
  palette: {
      type: "light"
  }
}

)


function App() {
  return (
    <BrowserRouter>
      
      <ThemeProvider theme={theme}>
          {/* //CSSBaseline -> estilos adecuados para nuestra aplicacion */} 
          <CssBaseline  maxWith={false}/>

          {/* 
                ver https://material-ui.com/api/container/ para manejar container
                Container -> limitar como mostrar las cosas 
                maxWith={false} -> quiere decir que es responsive   
          */}
          <Container maxWith={false}>

              {/* 
                  si quiero ver documentacion de grid -> https://material-ui.com/components/grid/
                  container -> es un prop de grid , es un tipo de grid , osea un grid tipo container
                  spacing -> espacio entre cada componente
                  direction -> orientar item de la grilla , por defecto es en filas 
              */}
              <Grid container spacing={2} direction="column">
                    {/* 
                      item -> es un prop de grid , es un tipo de grid , osea un grid tipo item 
                    */}
                  <Grid item>
                      <Header />
                  </Grid>
                  <Grid item>
                      <Menu />
                  </Grid>
                  <Grid item>
                      <div>Content</div>

                      {/* <Switch>
                        <Route path="/memes" component={MemeList} />
                      </Switch> */}
                  </Grid>
              </Grid>
          </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}



export default App;
