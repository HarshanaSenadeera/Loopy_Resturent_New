import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import hot from "../../images/Hot.jpg";
import soup from "../../images/soup.jpg";
import pizza from "../../images/Pizza.jpg";
import Tortilla from "../../images/Tortilla.jpg";
import Yakiniku from "../../images/Yakiniku.jpg";
import Croissant from  "../../images/Croissant.jpg";
import Tacos from "../../images/Tortilla.jpg";
import Ramen from "../../images/Ramen.jpg";
import Berger from "../../images/burger-with-melted-cheese.jpg";
import {Link, To} from "react-router-dom";


const images = [
  {
    url: hot,
    title: 'Hot Dishes',
    width: '33.33%',
    link:'/hotDish'
  },
  {
    url: soup,
    title: 'Soup Dishes',
    width: '33.33%',
    link:'/hotDish'


  },
  {
    url: pizza,
    title: 'pizza',
    width: '33.33%',
    link:'/hotDish'

  },

  {
    url: Tortilla,
    title: 'Tortilla',
    width: '33.33%',
    link:'/hotDish'

  },
  {
    url: Yakiniku,
    title: 'Yakiniku',
    width: '33.33%',
    link:'/hotDish'

  },
  {
    url: Croissant,
    title: 'Croissant',
    width: '33.33%',
    link:'/hotDish'

  },

  {
    url: Tacos,
    title: 'Tacos',
    width: '33.33%',
    link:'/hotDish'

  },
  {
    url: Ramen,
    title: 'Soup Dishes',
    width: '33.33%',
    link:'/hotDish'

  },
  {
    url: Berger,
    title: 'Berger',
    width: '33.33%',
    link:'/hotDish'

  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 400,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 400,
  },

  [theme.breakpoints.down('md')]: {
    width: '100% !important', // Overrides inline-style
    height: 400,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 20,
  right: 20,
  top: 20,
  bottom: 20,
  borderRadius:20,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  borderRadius:20,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (

          <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc  style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              <Link to={image.link} style={{fontSize:'20px' ,fontWeight:'bold',color:'white'}}>
              {image.title}
              </Link>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>

        </ImageButton>

      ))}
    </Box>
  );
}
