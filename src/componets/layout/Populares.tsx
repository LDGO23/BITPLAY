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
        imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdlXtovofL0OSyIxc47jBu8CPxwpIg4oScWROnnhCCQ&s',
        description: 'Brawl Stars es un juego móvil de acción y estrategia desarrollado por Supercell, donde los jugadores compiten en diferentes modos de juego usando una variedad de personajes únicos con habilidades especiales.',
        likes: '1.5K'
    },
    {
        label: 'PUBG',
        imgPath: 'https://wallpapers.com/images/featured/pubg-4k-m7d01u319yw5wo0m.jpg',
        description: 'PUBG es un juego de batalla real desarrollado por PUBG Corporation, donde 100 jugadores compiten en una isla para ser el último en pie.',
        likes: '2.3K',
    },
    {
        label: 'Fornite',
        imgPath: 'https://n4g.com/articles/wp-content/uploads/2023/03/fortnite-cyber-city-characters-chapter-4-season-2.jpg',
        description: 'Fortnite es un mundo lleno de experiencias. Entren en la isla y compitan para ser el último jugador (o equipo) en pie. Creen una isla con sus propias reglas. Pasen tiempo con sus amigos en una isla creada por alguien más. O salven al mundo acabando con hordas de monstruos junto a otros jugadores.',
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
            <Typography variant="h5" gutterBottom sx={{ color: 'purple', textAlign: 'center', margin: '2%', fontWeight: 'bold', fontSize: '35px' }}>
                Populares
            </Typography>
            <Box sx={{ flexGrow: 1, bgcolor: '#1d1d22', p: 2, position: 'relative', margin: 'auto' }}>

                {/* Iteracion de las imagens */}
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
                                                width: '80%',
                                                height: 'auto',
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'cover',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    </Grid>
                                    {/* Titulo, descripcion, me gustas */}
                                    <Grid item xs={12} md={12} sm={12} lg={6} sx={{ padding: '20px' }}>
                                        <Paper elevation={0} sx={{ p: 2, bgcolor: '#1d1d22' }}>
                                            <Typography variant="h6" sx={{ color: 'purple', padding: '10%', fontWeight: 'bold' }}>
                                                {step.label}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'white', display: { xs: 'none', sm: 'block' } }}>
                                                {step.description}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'white', display: { xs: 'none', sm: 'block' }, padding: '10%' }}>
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
