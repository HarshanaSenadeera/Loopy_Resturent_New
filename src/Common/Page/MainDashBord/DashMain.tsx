import ResponsiveGrid from "../../../componenet/DashBoard/NumCard";
import {NumCardTwo} from "../../../componenet/DashBoard/NumCardTwo";
import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {MainPieChart} from "../../../componenet/pieChart/MainPieChart";

export const DashMain = () => {
    return (
        <Grid container rowSpacing={5}>
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