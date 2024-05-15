import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from '@mui/material/CardHeader';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const OrderEdit: React.FC<{ buyer: any }> = ({ buyer }) => {
    return (
        <Box sx={{ overflowY: 'auto', borderRadius: '20px' }} >
            <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item xs={12}>
                    <Card sx={{ width: '100%' }}>
                        <CardHeader
                            title="Order Detail"
                            sx={{ backgroundColor: '#f5f5f5' }}
                        />
                        <CardContent>
                            <Grid container spacing={2} sx={{ marginBottom: '16px' }}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        <span style={{ fontWeight: 600 }}>Order Type:</span> {buyer.orderType}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 600 }}>Table/Room: </span>{buyer.tableOrRoomNumber}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 600 }}>Table:</span> {buyer.tableOrRoomNumber}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 600 }}>Address:</span> {buyer.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 600 }}>Email:</span> {buyer.email}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 600 }}>Phone: </span>{buyer.phone}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 600 }}>Type: </span>{buyer.type}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 600 }}>Waiter: </span>{buyer.waiterType}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
            <Grid container xs={12} sx={{padding:'10px',display:'flex',gap:'10px',justifyContent:'flex-end'}} >
                <Link to='/setting'>
                    <Button type="submit" variant="contained">Add Item</Button>
                </Link>
                <Button type="submit" variant="contained">Edit</Button>
            </Grid>
        </Box>
    );
};

export default OrderEdit;
