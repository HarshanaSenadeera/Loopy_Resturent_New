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
import { useCart } from "../CartProvider";
import CardDetails from "../../Card/CardDetaiils/CardDetails";
import {KeyboardDoubleArrowRightTwoTone} from "@mui/icons-material";
import {Link as RouterLink} from "react-router-dom";

// Define the type for the item object
interface DishItem {
    id: number;
    title: string;
    price: number;
    pic: string;
    quantity: number;
}

const dishesData: DishItem[] = [
    { id: 1, title: 'Normal Kottu', price: 220, pic: pic, quantity: 0 },
    { id: 2, title: 'Egg Kottu', price: 520, pic: pic, quantity: 0 },
    { id: 3, title: 'Cheese Kottu', price: 600, pic: pic, quantity: 0 },
    { id: 4, title: 'Chicken Kottu', price: 700, pic: pic, quantity: 0 },
    { id: 5, title: 'Dolphin Kottu', price: 750, pic: pic, quantity: 0 },
    { id: 6, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 },
    { id: 7, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 },
    { id: 8, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 },
    { id: 9, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 },
    { id: 10, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 },
    { id: 11, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 },
    { id: 12, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 },
    { id: 13, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 },
    { id: 14, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 },
    { id: 15, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 },
];

export const ColdDishes = () => {
    const { cartItems, setCartItems } = useCart(); // Destructure cartItems and setCartItems from useCart hook
    const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);
    const [showCartDetails, setShowCartDetails] = useState(false);


    // Specify the type for the item parameter
    const addToCart = (item: DishItem) => {
        setSelectedDish(item);
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
        <Grid container>
            <Grid item xs={12}>
                <Grid container justifyContent="flex-end">
                    <Cart itemCount={cartItems.length} toggleCartDetails={() => setShowCartDetails(!showCartDetails)} />
                </Grid>
            </Grid>

            <Grid container spacing={2} rowSpacing={3} columns={{ xs: 2, md: 15, sm: 2 }}>
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
                            <CardActions sx={{ justifyContent: 'space-around', display: 'flex' }}>
                                <Button variant="contained" color="error" sx={{ width: 100 }}>
                                    Edit
                                </Button>
                                <Button variant="contained" color="success" sx={{ width: 100 }} onClick={() => addToCart(dish)}>
                                    Add
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

           {/* {showCartDetails && cartItems.length > 0 && <CardDetails dishes={cartItems} />}*/}

            {/* Next Button */}
            <Grid item xs={12} sx={{ position: 'sticky', bottom: 0, right: 0, display: 'flex', justifyContent: 'flex-end', paddingRight: 2, paddingBottom: 4 }}>
                <Button
                    component={RouterLink}
                    to="/dish"
                    variant="contained"
                    color="primary"
                    sx={{ minWidth: '48px', width: '48px', height: '48px', borderRadius: '50%', fontSize: '1rem' }}
                >
                    <KeyboardDoubleArrowRightTwoTone />
                </Button>
            </Grid>


        </Grid>

    );
};
