import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {DailyIncome} from "../Reports/DailyIncome";
import {MounthlyIncome} from "../Reports/MounthlyIncome";
import {Annually} from "../Reports/Annually";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ReportMain() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <DailyIncome diff={16} trend="down" sx={{ height: '100%' }} value="Rs:00000.00" />
                </Grid>
                <Grid item xs>
                    <MounthlyIncome diff={16} trend="up" sx={{ height: '100%' }} value="Rs:00000.00" />
                </Grid>
                <Grid item xs>
                    <Annually diff={16} trend="down" sx={{ height: '100%' }} value="Rs:00000.00" />
                </Grid>
            </Grid>
        </Box>
    );
}
