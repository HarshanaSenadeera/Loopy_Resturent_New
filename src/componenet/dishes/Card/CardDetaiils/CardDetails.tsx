import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface DishItem {
    id: number;
    title: string;
    price: number;
    pic: string;
    quantity: number;
}

interface Props {
    dishes: DishItem[];
}

const CardDetails: React.FC<Props> = ({ dishes }) => {
    const [quantities, setQuantities] = React.useState<{ [id: number]: number }>({});

    const handleChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredValue = event.target.value ? parseInt(event.target.value, 10) : 0;
        setQuantities(prevState => ({
            ...prevState,
            [id]: enteredValue,
        }));
    };

    const handleDelete = (id: number) => {
        // Implement delete logic here
    };

    return (
        <Card sx={{ maxWidth: 345,top:150,right:10,height:'auto', position:'absolute', zIndex: 1,}}>
            <Typography variant={"h4"} style={{ textAlign: 'center' }}>
                Shopping Cart
            </Typography>
            {dishes.map((dish, index) => (
                <Card key={index} sx={{ maxWidth: 375, marginTop: index > 0 ? 2 : 0 }}>
                    <CardContent>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
                                <img alt="complex" src={dish.pic} style={{ height: '60px', width: '60px' }} />
                                <Typography style={{ textAlign: 'center' }}>
                                    {dish.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography style={{ textAlign: 'center' }}>
                                    RS. {dish.price}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
                                <Paper>
                                    <TextField
                                        type="number"
                                        value={quantities[dish.id] || dish.quantity}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(dish.id, e)}
                                        InputProps={{
                                            inputProps: {
                                                min: 1,
                                                step: 1,
                                            },
                                        }}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
                                <IconButton aria-label="delete" onClick={() => handleDelete(dish.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}

            <Box sx={{display:'flex',justifyContent:'center',justifyItems:'center',paddingTop:'20px',paddingBottom:'20px'}}>
                <Button variant="contained">
                    Order
                </Button>
            </Box>

        </Card>
    );
};

export default CardDetails;
