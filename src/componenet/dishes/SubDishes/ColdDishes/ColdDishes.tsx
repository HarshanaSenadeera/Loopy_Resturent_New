import React, { useState } from "react";


import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import pic from "../../../../images/Kottu.jpg";
import pic2 from "../../../../images/kottu beef.png";
import {Cart} from "../../Card/Cart";
const dishesData = [
    {id:1, title: 'Noraml Kottu', price:220  ,pic:pic },
    {id:1, title: 'Egg Kottu', price:520 ,pic:pic },
    {id:1, title: 'Cheese Kottu', price:600 ,pic:pic },
    {id:1, title: 'Chicken Kottu', price:700  ,pic:pic },
    {id:1, title: 'Dolphin Kottu', price:750  ,pic:pic },
    {id:1, title: 'Beef Kottu', price:750  ,pic:pic2 }



    // Add more dishes data as needed
];

export const ColdDishes = () => {
    const [cartItems, setCartItems] = useState(0);

    const addToCart = () => {
        setCartItems(cartItems + 1);
    };
    return (
        <Grid>
            <Grid container sx={{display:'flex',justifyContent:'flex-end'}}>
                <Cart itemCount={cartItems} />
            </Grid>
            <Grid container spacing={2} rowSpacing={3}  columns={{ xs: 2, md: 15 ,sm:2}}>
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
                            <CardContent sx={{ textAlign: 'center',display:'flex',justifyContent:'space-evenly' }}>
                                <Typography variant="h5" gutterBottom>
                                    {dish.title}
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    RS. {dish.price}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-around' ,display:'flex'}}>
                                <Button variant="contained" color="error" sx={{width:100}}>
                                    Edit
                                </Button>
                                <Button variant="contained" color="success" sx={{width:100}} onClick={addToCart}>
                                    Add
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>    );
};