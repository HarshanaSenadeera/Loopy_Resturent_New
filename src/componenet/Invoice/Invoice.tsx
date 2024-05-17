import React, {useState} from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from '../../Common/Image/logo.jpg'
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';



const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('IN001', 159, 6.0, 24, 4.0),
    createData('IN002', 237, 9.0, 37, 4.3),
    createData('IN003', 262, 16.0, 24, 6.0),
    createData('IN004', 305, 3.7, 67, 4.3),
    createData('IN005', 356, 16.0, 49, 3.9),
];

export const Invoice = () => {
    return (
        <Card sx={{padding: '20px', width:{
            xs:200,
                sm:300,
                md:400,
                lg:600,

            },height:'500px',overflowY:'auto'}}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid item xs={8}>
                    <img src={logo} width='150px' height='150px'/>
                </Grid>
                <Grid item xs={4} sx={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'column'}}>
                    <Typography variant="h4" sx={{fontWeight: 600}}>INVOICE</Typography>
                    <Typography variant="h5" sx={{fontWeight: 500}}>Grill Resturant</Typography>
                    <Typography variant="h6" sx={{fontWeight: 500}}>Colombo Road,</Typography>
                    <Typography variant="h6" sx={{fontWeight: 500}}>Galle SriLanka</Typography>
                    <Typography variant="h6" sx={{fontWeight: 500}}>16/5/2024</Typography>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'column'}}>
                    <Typography variant="h6" sx={{fontWeight: 600}}>Bill To :</Typography>
                    <Typography variant="subtitle1" sx={{fontWeight: 500}}>Colombo Road,</Typography>
                    <Typography variant="subtitle1" sx={{fontWeight: 500}}>Galle SriLanka</Typography>
                    <Typography variant="subtitle1" sx={{fontWeight: 500}}>16/5/2024</Typography>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'column'}}>
                    <Box  sx={{display: 'flex',  gap:'30px'}}>
                        <Typography variant="subtitle1" sx={{fontWeight: 600}}>Invoice#</Typography>
                        <Typography variant="subtitle1" >N172</Typography>

                    </Box>
                    <Box  sx={{display: 'flex',  gap:'30px'}}>
                    <Typography variant="subtitle1" sx={{fontWeight: 600}}>Invoice Date</Typography>
                        <Typography variant="subtitle1" >May 12, 2024</Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'column'}}>
                    <TableContainer >
                        <Table sx={{minWidth: 700}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Orede Item</StyledTableCell>
                                    <StyledTableCell align="right">Qty</StyledTableCell>
                                    <StyledTableCell align="right">Price</StyledTableCell>
                                    <StyledTableCell align="right">Amount</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'column'}}>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 4}}>
                        <Grid container xs={8} spacing={2} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Grid item xs={8}>
                                <Typography sx={{fontWeight: 600, textAlign: 'center'}} variant="subtitle2">Sub
                                    Total</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{fontWeight: 600, textAlign: 'end'}}
                                            variant="subtitle2">190</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography sx={{fontWeight: 600, textAlign: 'center'}} variant="subtitle2">Sale Tax
                                    (10%)</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{fontWeight: 600, textAlign: 'end'}} variant="subtitle2">10</Typography>
                            </Grid>

                            <Grid item xs={8} >
                                <Typography sx={{fontWeight: 600, textAlign: 'center'}}
                                            variant="subtitle2">TOTAL</Typography>
                            </Grid>
                            <Grid item xs={4} >
                                <Typography sx={{fontWeight: 600, textAlign: 'end'}}
                                            variant="subtitle2">200.00</Typography>
                            </Grid>


                        </Grid>
                    </Box>
                </Grid>

            </Grid>
        </Card>

    );
};
