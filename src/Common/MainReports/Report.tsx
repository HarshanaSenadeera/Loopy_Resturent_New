import * as React from 'react';
import  {DailyIncome} from "../Reports/DailyIncome";
import Grid from '@mui/material/Unstable_Grid2';
import {MounthlyIncome} from "../Reports/MounthlyIncome";
import {Annually} from "../Reports/Annually";

export default function ReportMain(): React.JSX.Element {
    return (
        <Grid container spacing={3}>
            <Grid lg={4} sm={6} xs={12}>
                <DailyIncome diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
            </Grid>
            <Grid lg={4} sm={6} xs={12}>
                <MounthlyIncome diff={16} trend="up" sx={{ height: '100%' }} value="1.6k" />
            </Grid>
            <Grid lg={4} sm={6} xs={12}>
                <Annually diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
            </Grid>


        </Grid>
    );
}
