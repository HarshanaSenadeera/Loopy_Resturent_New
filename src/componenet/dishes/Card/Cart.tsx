import React, {useState} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CardDetails from "./CardDetaiils/CardDetails";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {DishItem} from "../SubDishes/CartProvider";


/*
export const Cart: React.FC<{ itemCount: number; dishes: DishItem[] }> = ({ itemCount, dishes }) => {
    const [showMoreCard, setShowMoreCard] = useState(false);

    const handleClickedCard = () => {
        setShowMoreCard(!showMoreCard);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button onClick={handleClickedCard}>
                <ShoppingCartIcon sx={{ fontSize: '40px' }} />
            </Button>
            <Box sx={{
                width: 30,
                height: 30,
                borderRadius: 10,
                bgcolor: '#dedede',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    {itemCount}
                </Typography>
            </Box>
            {/!* Render the cart details component only when showMoreCard is true *!/}
            {showMoreCard && <CardDetails dishes={dishes} />}
        </Box>
    );
};
*/
export const Cart: React.FC<{ itemCount: number; toggleCartDetails: () => void }> = ({itemCount, toggleCartDetails}) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button onClick={toggleCartDetails}>
                <ShoppingCartIcon sx={{ fontSize: '40px' }} />
            </Button>
            <Box sx={{
                width: 30,
                height: 30,
                borderRadius: 10,
                bgcolor: '#dedede',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    {itemCount}
                </Typography>

            </Box>
        </Box>
    );
};

export default Cart;
