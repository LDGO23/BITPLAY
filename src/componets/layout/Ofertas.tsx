import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { styled } from '@mui/system';

const ofertasData = [
    {
        title: '50% de descuento en todos los juegos de Ubisoft',
        image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwiii/MWIII-REVEAL-FULL-TOUT.jpg',
        category: 'Ubisoft',
    },
    {
        title: 'Descuentos de verano en Steam',
        image: 'https://image.api.playstation.com/vulcan/img/rnd/202008/1301/raryqz0xAsk3HutslehRAW4A.png',
        category: 'Steam',
    },
    {
        title: 'Ofertas especiales en juegos de EA',
        image: 'https://m.media-amazon.com/images/I/81mciIlvdTL._AC_UF894,1000_QL80_.jpg',
        category: 'EA Games',
    },
    {
        title: 'Promociones en juegos de Nintendo Switch',
        image: 'https://musicart.xboxlive.com/7/26fd6500-0000-0000-0000-000000000002/504/image.jpg',
        category: 'Nintendo',
    },
    {
        title: 'Descuentos en juegos de PlayStation',
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png',
        category: 'PlayStation',
    },
    {
        title: 'Ofertas en juegos de Xbox',
        image: 'https://m.media-amazon.com/images/I/81rPdqLQGTL._AC_UF894,1000_QL80_.jpg',
        category: 'Xbox',
    },
];

const StyledCard = styled(Box)({
    backgroundColor: '#1d1d22',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: '8px',
    borderRadius: '8px',
});

const StyledCardMedia = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '8px',
});

const Ofertas: React.FC = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = Math.ceil(ofertasData.length / 4);

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
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'purple', textAlign: 'center', margin: '2%', fontWeight: 'bold', fontSize: '35px' }}>
                Ofertas
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                <Button
                    size="small"
                    onClick={handleBack}
                    sx={{
                        zIndex: 1,
                        color: 'white',
                    }}
                >
                    <KeyboardArrowLeft />
                </Button>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    style={{ width: 'calc(100% - 64px)' }} // Reduce width to account for navigation buttons
                >
                    {Array.from(new Array(maxSteps)).map((_, index) => (
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
                            <Grid container spacing={2}>
                                {ofertasData.slice(index * 4, index * 4 + 4).map((item, idx) => (
                                    <Grid item xs={12} sm={6} md={3} key={idx}>
                                        <StyledCard>
                                            <Typography variant="subtitle1" sx={{ color: 'purple', marginBottom: '8px' }}>
                                                {item.category}
                                            </Typography>
                                            <StyledCardMedia
                                                src={item.image}
                                                alt={item.title}
                                            />
                                            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                                                {item.title}
                                            </Typography>
                                        </StyledCard>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    ))}
                </SwipeableViews>
                <Button
                    size="small"
                    onClick={handleNext}
                    sx={{
                        zIndex: 1,
                        color: 'white',
                    }}
                >
                    <KeyboardArrowRight />
                </Button>
            </Box>
        </Box>
    );
};

export default Ofertas;
