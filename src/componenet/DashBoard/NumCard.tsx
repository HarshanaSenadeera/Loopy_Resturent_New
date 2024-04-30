import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {CardHeader} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import {Liquor, OutdoorGrill, TableBar} from "@mui/icons-material";
import {red} from "@mui/material/colors";
import {styled} from "@mui/system";
import Paper from "@mui/material/Paper";



export default function ResponsiveGrid() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4}>
                    <Card sx={{height:200,borderRadius:5 ,border:' 1px solid #c52b18'}}>
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
                    <Card sx={{height:200,borderRadius:5 ,border:' 1px solid #c52b18'}}>
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
                    <Card sx={{height:200,borderRadius:5 ,border:' 1px solid #c52b18'}}>
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

        </>
    );
}
