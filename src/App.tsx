import * as React from 'react';
import Nav from '../src/componets/layout/nav';
import Populares from '../src/componets/layout/Populares';

import './App.css';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Grid container justifyContent="center" alignItems="center">
        <Grid sx={{ margin: '70px'}}  item xs={8} md={8} lg={12}>
          <Populares />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
