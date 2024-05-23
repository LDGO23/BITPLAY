import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const images = [
  {
    label: 'Brawl Stars',
    imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    description: 'Brawl Stars es un juego móvil de acción y estrategia desarrollado por Supercell, donde los jugadores compiten en diferentes modos de juego usando una variedad de personajes únicos con habilidades especiales.',
    likes: '1.5K',
    tags: ['Acción', 'Móvil']
  },
  {
    label: 'PUBG',
    imgPath: 'https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/pubg-solo-chromebook-wallpaper.jpg',
    description: 'Brawl Stars es un juego móvil de acción y estrategia desarrollado por Supercell, donde los jugadores compiten en diferentes modos de juego usando una variedad de personajes únicos con habilidades especiales.',
    likes: '1.5K',
    tags: ['Acción', 'Móvil']
  },

];

function Populares() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Container> <br /><br /><br /><br />  
      <Box sx={{ maxWidth: 800, flexGrow: 1, bgcolor: 'background.paper', p: 2  }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'purple' }}>
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
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box
                      component="img"
                      sx={{
                        height: 'auto',
                        display: 'block',
                        maxWidth: '100%',
                        overflow: 'hidden',
                        width: '100%',
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                      <Typography variant="h6">{step.label}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {step.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {step.likes} de personas le gusta
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                        {step.tags.map((tag) => (
                          <Button key={tag} variant="contained" size="small">
                            {tag}
                          </Button>
                        ))}
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </Box>
    </Container>
  );
}

export default Populares;
