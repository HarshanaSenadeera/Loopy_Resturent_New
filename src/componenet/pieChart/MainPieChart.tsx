import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BasicPie from "./FoodChart";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const MainPieChart = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item   xs={6}>
                    <Paper elevation={3} sx={{ p: 2 , border:' 1px solid #c52b18'}}> {/* Add shadow with elevation and padding */}
                        <Typography variant="h4"  component="div">
                            Mac Miller
                        </Typography>
                        <BasicPie />
                    </Paper>
                </Grid>
                <Grid item  xs={6}>
                    <Paper elevation={3} sx={{ p: 2 ,  border:' 1px solid #c52b18'}}> {/* Add shadow with elevation and padding */}
                        <Typography variant="h4"   component="div" sx={{fontStyle:"bold"}}>
                            Mac Miller
                        </Typography>
                        <BasicPie />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
