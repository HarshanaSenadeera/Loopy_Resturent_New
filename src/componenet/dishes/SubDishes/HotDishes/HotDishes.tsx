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
import {Modal} from "@mui/joy";
import EditDish from "../../../EditDish/EditDish";
import {Close} from "@material-ui/icons";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

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
];



export const HotDishes = () => {
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

    const [open, setOpen] = useState(false);

    const handleEditClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                            <>
                                <CardActions sx={{ justifyContent: 'space-around', display: 'flex' }}>
                                    <Button variant="contained" color="error" sx={{ width: 100 }} onClick={handleEditClick}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" color="success" sx={{ width: 100 }} onClick={() => addToCart(dish)}>
                                        Add
                                    </Button>
                                </CardActions>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <div>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <IconButton onClick={handleClose} size="small">
                                                <Close />
                                            </IconButton>
                                        </Box>
                                        <EditDish/>
                                    </div>
                                </Modal>
                            </>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {showCartDetails && cartItems.length > 0 && <CardDetails dishes={cartItems} />}
        </Grid>
    );
};
