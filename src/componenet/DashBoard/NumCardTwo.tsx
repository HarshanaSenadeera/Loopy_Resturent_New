import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {PeopleAltSharp,TakeoutDining,Fastfood} from '@mui/icons-material';
import CardMedia from '@mui/material/CardMedia';
import Box from '@material-ui/core/Box/Box';

export const NumCardTwo = () => {
    return (

        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4}>
                        <Card sx={{ display: 'flex',justifyContent:'space-evenly' }}>
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
                                sx={{ width: 151,display:'flex',justifyContent:'center' }}
                                /*       image={guest} // Assuming you have 'guest' imported or defined somewhere
                                       alt="Live from space album cover"*/
                            >
                                <PeopleAltSharp style={{ fontSize: '5rem',color:'#f44336' }} />

                            </CardMedia>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ display: 'flex', justifyContent:'space-evenly' }}>
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
                            <CardMedia sx={{ width: 151,display:'flex',justifyContent:'center' }}/*       image={guest} // Assuming you have 'guest' imported or defined somewhere
                            alt="Live from space album cover"*/>
                                <TakeoutDining style={{ fontSize: '5rem',color:'#f44336' }} />

                            </CardMedia>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ display: 'flex',justifyContent:'space-evenly' }}>
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
                                sx={{ width: 151,display:'flex',justifyContent:'center' }}
                                /*       image={guest} // Assuming you have 'guest' imported or defined somewhere
                                       alt="Live from space album cover"*/
                            >
                                <Fastfood style={{ fontSize: '5rem',color:'#f44336' }} />

                            </CardMedia>
                        </Card>
                    </Grid>

                </Grid>
            </Box>

        </>
    );
};
