import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {CardHeader} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import {Liquor, OutdoorGrill, Receipt, TableBar} from "@mui/icons-material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {BorderColor} from "@material-ui/icons";

export default function ButtonSizes() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4}>

                        <Box sx={{
                            '& button': {
                                m: 1,
                                width: '350px',
                                height: '150px',
                                backgroundColor: '#c52b18',
                                color: 'white',
                                borderRadius: '20px'
                            }
                        }}>
                            <div>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<BorderColor/>}
                                >
                                    Create Order
                                </Button>
                            </div>
                        </Box>

                    </Grid>


                    <Grid item xs={4}>
                        <Box sx={{
                            '& button': {
                                m: 1,
                                width: '350px',
                                height: '150px',
                                backgroundColor: '#c52b18',
                                color: 'white'
                            }
                        }}>
                            <div>
                                <Button variant="contained" size="large">
                                    Create Order
                                </Button>
                            </div>
                        </Box>
                    </Grid>



                    <Grid item xs={4}>
                        <Box sx={{
                            '& button': {
                                m: 1,
                                width: '350px',
                                height: '150px',
                                backgroundColor: '#c52b18',
                                color: 'white',
                                borderRadius: '20px'
                            }
                        }}>
                            <div>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<Receipt/>}
                                >
                                    Invoices
                                </Button>
                            </div>
                        </Box>
                    </Grid>


                </Grid>
            </Box>

        </>

    );
}
