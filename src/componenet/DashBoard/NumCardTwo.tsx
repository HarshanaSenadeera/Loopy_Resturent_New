import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import {CardHeader} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { red ,blueGrey} from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TableBarIcon from '@mui/icons-material/TableBar';
import {Liquor, TableBar ,OutdoorGrill,PeopleAltSharp,TakeoutDining,Fastfood} from '@mui/icons-material';
import guest from '../../Common/Image/guest.jpg'
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Box from '@material-ui/core/Box/Box';

export const NumCardTwo = () => {
    return (
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
    );
};