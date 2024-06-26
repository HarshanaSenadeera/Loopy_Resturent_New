import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pic from '../../images/burger-with-melted-cheese.jpg';
import '../../css/card.css';
import Grid from "@mui/material/Grid";


export default function ImgMediaCard() {

    return (
        <Grid container spacing={2}   columns={{ xs: 2, md: 15 ,sm:2}}>
            <Grid item xs={5}>
                <Card sx={{ maxWidth: 345 }}>
                    <div className="img-container">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="dkd"
                            image={pic}
                            className="pop-up-image"
                        />
                    </div>
                    <CardContent sx={{ textAlign: 'center'}}>
                        <Typography variant="h5" gutterBottom>
                            Hot Dishes
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button variant="contained" color="error">
                            View More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={5}>
                <Card sx={{ maxWidth: 345 }}>
                    <div className="img-container">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={pic}
                            className="pop-up-image"
                        />
                    </div>
                    <CardContent sx={{ textAlign: 'center'}}>
                        <Typography variant="h5" gutterBottom>
                            Soup Dishes
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button variant="contained" color="error">
                            View More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={5}>
                <Card sx={{ maxWidth: 345 }}>
                    <div className="img-container">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={pic}
                            className="pop-up-image"
                        />
                    </div>
                    <CardContent sx={{ textAlign: 'center'}}>
                        <Typography variant="h5" gutterBottom>
                            Soup Dishes
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button variant="contained" color="error">
                            View More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={5}>
                <Card sx={{ maxWidth: 345 }}>
                    <div className="img-container">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={pic}
                            className="pop-up-image"
                        />
                    </div>
                    <CardContent sx={{ textAlign: 'center'}}>
                        <Typography variant="h5" gutterBottom>
                            Soup Dishes
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button variant="contained" color="error">
                            View More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={5}>
                <Card sx={{ maxWidth: 345 }}>
                    <div className="img-container">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={pic}
                            className="pop-up-image"
                        />
                    </div>
                    <CardContent sx={{ textAlign: 'center'}}>
                        <Typography variant="h5" gutterBottom>
                            Soup Dishes
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button variant="contained" color="error">
                            View More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={5}>
                <Card sx={{ maxWidth: 345 }}>
                    <div className="img-container">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={pic}
                            className="pop-up-image"
                        />
                    </div>
                    <CardContent sx={{ textAlign: 'center'}}>
                        <Typography variant="h5" gutterBottom>
                            Soup Dishes
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button variant="contained" color="error">
                            View More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );

}
