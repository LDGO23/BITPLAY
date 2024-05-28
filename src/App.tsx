import * as React from 'react';
import Nav from '../src/componets/layout/nav';
import Populares from '../src/componets/layout/Populares';
import Divider from '@mui/material/Divider';
import Novedades from '../src/componets/layout/Novedades'
import Ofertas from '../src/componets/layout/Ofertas'
import Categoria from '../src/componets/layout/Categorias'

import './App.css';
import { Grid, Container } from '@mui/material';

function App() {

  // const renderView = () => {
  //   switch (window.location.pathname) {
  //     case '/':
  //       return <Populares />;
  //     case '/populares':
  //       return <Populares />;
  //     case '/novedades':
  //       return <Novedades />;
  //     case '/ofertas':
  //       return <Ofertas />;
  //     case '/categorias':
  //       return <Categoria />;
  //     default:
  //       return <Populares />;
  //   }
  // };
  return (  
    <div className='App'>
      <Nav />
      <Grid container justifyContent="center" alignItems="center">
        <Grid sx={{ margin: '70px'}}  item xs={8} md={8} lg={12}>
          <Populares />
        </Grid>

      </Grid>
      <Container>
        <Divider sx={{bgcolor: '#FFFFFF'}}/>
      </Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid sx={{ margin: '70px'}}  item xs={8} md={8} lg={12}>
          <Novedades />
        </Grid>
      </Grid>
      <Container>
        <Divider sx={{bgcolor: '#FFFFFF'}}/>
      </Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid sx={{ margin: '70px'}}  item xs={8} md={8} lg={12}>
          <Ofertas />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid sx={{ margin: '70px'}}  item xs={8} md={8} lg={12}>
          <Categoria />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
