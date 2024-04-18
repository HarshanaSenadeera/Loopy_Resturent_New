import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pic from '../../images/burger-with-melted-cheese.jpg';
import '../../css/card.css';

export default function ImgMediaCard() {
    return (
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
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Ham cheese berger
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
