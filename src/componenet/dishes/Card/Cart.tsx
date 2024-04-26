import React, {useState} from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardDetails from "./CardDetaiils/CardDetails";

export const Cart: React.FC<{ itemCount: number }> = ({ itemCount }) => {
    const [showMoreCard,setShowMoreCard]=useState(false)
    const handlerClickedCard=()=>{
        setShowMoreCard(!showMoreCard)
    };
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1,  }}>
            <Button onClick={handlerClickedCard} >
                <ShoppingCartIcon  sx={{fontSize:'40px'}}/>
            </Button>
            <Box sx={{  width: 30,
                height: 30,
                borderRadius: 10,
                bgcolor: '#dedede',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <Typography variant="h5" sx={{ textAlign: 'center'}}  >
                    {itemCount}
                </Typography>
            </Box>
            {showMoreCard && <CardDetails/>}
        </Box>
    );
};
