import * as React from 'react';
import {DailyIncome} from "../Reports/DailyIncome";
import {MounthlyIncome} from "../Reports/MounthlyIncome";
import {Annually} from "../Reports/Annually";
import Grid from "@mui/material/Grid";


export default function ReportMain(): React.JSX.Element {
    return (
        <Grid container spacing={3}>
            <Grid lg={4} sm={6} xs={12}>
                <DailyIncome diff={16} trend="down" sx={{ height: '100%' }} value="Rs:00000.00" />
            </Grid>
            <Grid lg={4} sm={6} xs={12}>
                <MounthlyIncome diff={16} trend="up" sx={{ height: '100%' }} value="Rs:00000.00" />
            </Grid>
            <Grid lg={4} sm={6} xs={12}>
                <Annually diff={16} trend="down" sx={{ height: '100%' }} value="Rs:00000.00" />
            </Grid>
        </Grid>
    );
}
