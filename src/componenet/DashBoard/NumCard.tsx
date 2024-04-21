import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
import {Liquor, TableBar ,OutdoorGrill} from '@mui/icons-material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4}>
                    <Card sx={{height:200,borderRadius:5}}>
                        <CardHeader sx={{bgcolor:'#ff9c00'}}
                                    title="Available Tables"
                                    titleTypographyProps={{variant:'h6',color:'#ffffff'}}
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[600], width: 50, height: 50}} aria-label="recipe">
                                            <TableBar/>
                                        </Avatar>
                                    }
                        />
                        <CardContent>
                            <Typography
                                variant='h6'
                                style={{
                                    color: "#3c3c3c",
                                    textAlign: "center",
                                    fontSize: "3rem", // Adjust the size as needed
                                    fontWeight: "bold",

                                }}
                            >
                                000
                            </Typography>


                        </CardContent>



                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{height:200,borderRadius:5}}>
                        <CardHeader sx={{bgcolor:'#ff9c00'}}
                                    title="Num Of Kichen Order"
                                    titleTypographyProps={{variant:'h6',color:'#ffffff'}}
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[600], width: 50, height: 50}} aria-label="recipe">
                                            <OutdoorGrill/>
                                        </Avatar>
                                    }
                        />
                        <CardContent>
                            <Typography
                                variant='h6'
                                style={{
                                    color: "#3c3c3c",
                                    textAlign: "center",
                                    fontSize: "3rem", // Adjust the size as needed
                                    fontWeight: "bold",
                                }}
                            >
                                000
                            </Typography>


                        </CardContent>



                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{height:200,borderRadius:5}}>
                        <CardHeader sx={{bgcolor:'#ff9c00'}}
                                    title="Num of Bottle Order"
                                    titleTypographyProps={{variant:'h6',color:'#ffffff'}}
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[600], width: 50, height: 50}} aria-label="recipe">
                                            <Liquor/>
                                        </Avatar>
                                    }
                        />
                        <CardContent>
                            <Typography
                                variant='h6'
                                style={{
                                    color: "#3c3c3c",
                                    textAlign: "center",
                                    fontSize: "3rem", // Adjust the size as needed
                                    fontWeight: "bold",
                                }}
                            >
                                000
                            </Typography>


                        </CardContent>



                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}
