import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const images = [
  {
    label: 'Brawl Stars',
    imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    description: 'Brawl Stars es un juego móvil de acción y estrategia desarrollado por Supercell, donde los jugadores compiten en diferentes modos de juego usando una variedad de personajes únicos con habilidades especiales.',
    likes: '1.5K'
  },
  {
    label: 'PUBG',
    imgPath: 'https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/pubg-solo-chromebook-wallpaper.jpg',
    description: 'PUBG es un juego de batalla real desarrollado por PUBG Corporation, donde 100 jugadores compiten en una isla para ser el último en pie.',
    likes: '2.3K',
  },
];

function Populares() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1, bgcolor: '#1d1d22', p: 2, position: 'relative', margin: 'auto' }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'purple', textAlign: 'center' }}>
          Populares
        </Typography>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={12} sm={12} lg={6}>
                    <Box
                      component="img"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '100%', 
                        maxHeight: '100%', 
                        objectFit: 'cover',
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} lg={6}>
                    <Paper elevation={0} sx={{ p: 2, bgcolor: '#1d1d22' }}>
                      <Typography variant="h6" sx={{ color: 'purple' }}>
                        {step.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>
                        {step.description}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>
                        {step.likes} de personas le gusta
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <Button
          size="small"
          onClick={handleBack}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <KeyboardArrowLeft sx={{ color: 'white' }} />
        </Button>
        <Button
          size="small"
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <KeyboardArrowRight sx={{ color: 'white' }} />
        </Button>
      </Box>
    </Container>
  );
}

export default Populares;
