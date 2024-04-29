import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { PeopleAltSharp, TakeoutDining, Fastfood } from '@mui/icons-material';

const ResponsiveComponent = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Total Guest
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Mac Miller
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            sx={{ width: 151, display: 'flex', justifyContent: 'center' }}
                        >
                            <PeopleAltSharp style={{ fontSize: '5rem', color: '#f44336' }} />
                        </CardMedia>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Take away
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Mac Miller
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            sx={{ width: 151, display: 'flex', justifyContent: 'center' }}
                        >
                            <TakeoutDining style={{ fontSize: '5rem', color: '#f44336' }} />
                        </CardMedia>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Dining
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Mac Miller
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            sx={{ width: 151, display: 'flex', justifyContent: 'center' }}
                        >
                            <Fastfood style={{ fontSize: '5rem', color: '#f44336' }} />
                        </CardMedia>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ResponsiveComponent;
