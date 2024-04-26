import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Grid from "@mui/material/Grid";

export const Cart: React.FC<{ itemCount: number }> = ({ itemCount }) => {
    return (
        <Card sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h5" gutterBottom>
                {itemCount}
            </Typography>
            <ShoppingCartIcon />
        </Card>
    );
};
