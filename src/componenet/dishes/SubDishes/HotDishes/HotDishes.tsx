import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Cart } from "../../Card/Cart";
import pic from "../../../../images/Kottu.jpg";
import pic2 from "../../../../images/kottu beef.png";
import {useCart} from "../CartProvider";
import {DialogContent} from "@mui/joy";
import {Dialog} from "@mui/material";
import EditDish from "../../../EditDish/EditDish";

// Define the type for the item object
interface DishItem {
    id: number;
    title: string;
    price: number;
    pic: string;
    quantity: number; // Add the quantity property
}

const dishesData: DishItem[] = [
    { id: 7, title: 'Normal Kottu', price: 220, pic: pic, quantity: 0 },
    { id: 8, title: 'Egg Kottu', price: 520, pic: pic, quantity: 0 },
    { id: 9, title: 'Cheese Kottu', price: 600, pic: pic, quantity: 0 },
    { id: 10, title: 'Cheese Kottu', price: 600, pic: pic, quantity: 0 },
    { id: 11, title: 'Cheese Kottu', price: 600, pic: pic, quantity: 0 },
    { id: 12, title: 'Cheese Kottu', price: 600, pic: pic, quantity: 0 },
    { id: 13, title: 'Cheese Kottu', price: 600, pic: pic, quantity: 0 },

    // Add more dishes data as needed
];




export const HotDishes = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { cartItems, setCartItems } = useCart(); // Destructure cartItems and setCartItems from useCart hook

    // Specify the type for the item parameter
    const addToCart = (item: DishItem) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    return (
        <Grid container >
            <Grid item xs={12}>
                <Grid container justifyContent="flex-end">
                    <Cart itemCount={cartItems.length} />
                </Grid>
            </Grid>
            <Grid container  spacing={2} rowSpacing={3} columns={{ xs: 2, md: 15, sm: 2 }}>
                {dishesData.map((dish, index) => (
                    <Grid item xs={5} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <div className="img-container">
                                <CardMedia
                                    component="img"
                                    alt="dish image"
                                    height="150"
                                    image={dish.pic}
                                    className="pop-up-image"
                                />
                            </div>
                            <CardContent sx={{ textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                                <Typography variant="h5" gutterBottom>
                                    {dish.title}
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    RS. {dish.price}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent: 'space-around', display: 'flex'}}>
                                <div>
                                    <Button variant="contained" color="error" sx={{width: 100}}
                                            onClick={handleClickOpen}>
                                        Edit
                                    </Button>
                                    <Dialog open={open} onClose={handleClose}>
                                        <DialogContent>
                                            {/* Your popup component content goes here */}
                                            <EditDish/>
                                            <Button onClick={handleClose}>Close</Button>
                                        </DialogContent>
                                    </Dialog>
                                </div>

                                <Button variant="contained" color="success" sx={{width: 100}}
                                        onClick={() => addToCart(dish)}>
                                    Add
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};
