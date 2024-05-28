import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const novedadesData = [
    {
        title: 'Review Bombing polémica por el aniversario de Genshin Impact',
        image: 'https://media.tycsports.com/files/2022/01/05/377945/free-fire-sistema-de-clasificacion-y-como-subir-de-rango_862x485.png',
        category: 'Genshin Impact',
    },
    {
        title: 'Fan de Minecraft encuentra un objeto único en el juego que nunca nadie noto',
        image: 'https://store-images.s-microsoft.com/image/apps.608.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.bc981608-3fa4-4929-82ff-b162b8788784?q=90&w=480&h=270',
        category: 'Minecraft',
    },
    {
        title: 'Ajuste en la estrategia de Esports de League of Legends de Riot en 2024',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQX-vpmGeE6dO8aKqXLp0E8SeWSNuDFVyMf2Fg4SV6ZA&s',
        category: 'League of Legends',
    },
    {
        title: 'Skullgirls quiere ser políticamente correcto; censura arte de personajes y mucho más',
        image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/245170/capsule_616x353.jpg?t=1712869073',
        category: 'SkullGirls',
    },
    {
        title: 'Honkai: Star Rail 2.2 ya está disponible, y llega con nuevos personajes y un sinfín de ',
        image: 'https://upload-os-bbs.hoyolab.com/upload/2023/04/14/176658501/df530f5ba6df1b3e85f3472dc7db0da5_2586942191771520719.jpeg',
        category: 'Honkai Star Rail',
    },
    {
        title: 'Clash Royale y Clash of Clans llegan por sorpresa a PC, ¿cómo jugarlos?',
        image: 'https://i.ytimg.com/vi/uWsQ5IWVilM/maxresdefault.jpg',
        category: 'Clash Royale',
    },
];

const StyledCard = styled(Card)({
    backgroundColor: '#1d1d22',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
});

const StyledCardMedia = styled(CardMedia)({
    height: 'auto',
    paddingTop: '56.25%', // 16:9 aspect ratio
});

const Novedades: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'purple', textAlign: 'center', margin: '2%', fontWeight: 'bold', fontSize: '35px' }}>
                Novedades
            </Typography>
            <Grid container spacing={3}>
                {novedadesData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <StyledCard>
                            <CardContent>
                                <Typography variant="subtitle1" sx={{ color: 'purple' }}>
                                    {item.category}
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                                    {item.title}
                                </Typography>
                            </CardContent>
                            <StyledCardMedia
                                image={item.image}
                                title={item.title}
                            />
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Novedades;
