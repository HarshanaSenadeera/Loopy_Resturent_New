
import React from "react";
import Grid from "@mui/material/Grid";
import {MainPieChart} from "../../../componenet/pieChart/MainPieChart";
import ButtonSizes from "../../../componenet/dashboard/ButtonSide";
import ResponsiveGrid from "../../../componenet/dashboard/NumCard";
import NumCardTwo from "../../../componenet/dashboard/NumCardTwo";




export const DashMain = () => {
    return (
        <Grid container rowSpacing={5}>
            <Grid item xs={12}>
                <ButtonSizes/>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveGrid/>
            </Grid>
            <Grid item xs={12}>
                <NumCardTwo/>
            </Grid>
            <Grid item xs={12}>
                <MainPieChart/>
            </Grid>

        </Grid>

    );
};
