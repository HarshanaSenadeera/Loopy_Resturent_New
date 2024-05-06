import ResponsiveGrid from "../../../componenet/DashBoard/NumCard";
import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {MainPieChart} from "../../../componenet/pieChart/MainPieChart";
import ButtonSizes from "../../../componenet/DashBoard/ButtonSide";
import NumCardTwo from '../../../componenet/DashBoard/NumCardTwo';




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
