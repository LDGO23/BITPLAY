import * as React from 'react';
import  Nav from '../src/componets/layout/nav';
import  Populares from '../src/componets/layout/Populares';

import './App.css'
import { Menu } from '@mui/material';


function App() {
  return (
    <div className='App'>
      <Nav />
      <Populares/>
    </div>
  );  
}

export default  App
