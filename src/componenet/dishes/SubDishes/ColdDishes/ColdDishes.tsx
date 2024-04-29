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
import {Dialog} from "@mui/material";
import {DialogContent, Modal} from "@mui/joy";
import EditDish from "../../../EditDish/EditDish";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {Close} from "@material-ui/icons";
import ProfileForm from "../../../userDetails/user";
import {useTheme} from "@mui/material/styles";

// Define the type for the item object
interface DishItem {
    id: number;
    title: string;
    price: number;
    pic: string;
    quantity: number; // Add the quantity property
}

const dishesData: DishItem[] = [
    { id: 1, title: 'Normal Kottu', price: 220, pic: pic, quantity: 0 },
    { id: 2, title: 'Egg Kottu', price: 520, pic: pic, quantity: 0 },
    { id: 3, title: 'Cheese Kottu', price: 600, pic: pic, quantity: 0 },
    { id: 4, title: 'Chicken Kottu', price: 700, pic: pic, quantity: 0 },
    { id: 5, title: 'Dolphin Kottu', price: 750, pic: pic, quantity: 0 },
    { id: 6, title: 'Beef Kottu', price: 750, pic: pic2, quantity: 0 }
    // Add more dishes data as needed
];

export const ColdDishes = () => {


    const handleClickOpen = () => {
        setOpen(true);
    };


    const [open, setOpen] = useState(false);

    const theme = useTheme();

    const handleOpen = () => {
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
                                            <>
                                                <MenuItem onClick={handleOpen}>My account</MenuItem>
                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        width: 400,
                                                        bgcolor: 'background.paper',
                                                        p: 4,
                                                        [theme.breakpoints.up('sm')]: {
                                                            width: 600,
                                                            maxWidth: '80%',
                                                        },
                                                    }}>

                                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                            <IconButton onClick={handleClose} size="small">
                                                                <Close />
                                                            </IconButton>
                                                        </Box>
                                                        <ProfileForm />
                                                    </Box>
                                                </Modal>
                                            </>
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
