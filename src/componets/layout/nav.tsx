import * as React from 'react';
import './nav.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { Box, Container, Typography } from '@mui/material';

function Nav() {
    return (
      <Box className='Appbar'>
        <Container >
          <Box className='Contenerdor'>
            <Box className='content-title'>
              <SportsEsportsIcon className='icon' />
              <Typography variant="h6">GameNexus</Typography>
            </Box>
            <Box className='content-icons'>
              <FavoriteIcon className='icon' />
              <NotificationsIcon className='icon' />
              <AccountCircleIcon className='icon' />
            </Box>
             
          </Box>
        </Container>
      </Box>
    );  
}

export default Nav;
