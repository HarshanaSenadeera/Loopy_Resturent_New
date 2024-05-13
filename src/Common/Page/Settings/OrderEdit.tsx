import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useOrderContext} from "./OrderProvider";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const OrderEdit: React.FC = () => {
    const {buyerList} = useOrderContext();

    return (
        <div style={{overflowY: 'auto', overflowX: 'auto', maxHeight: '500px', maxWidth: '100%'}}>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                        {buyerList.map((buyer, index) => (
                            <div key={index}>
                                <Typography variant="h3">{buyer.orderType}</Typography>
                                <Typography variant="h3">{buyer.type1}</Typography>
                                <Typography variant="h3">{buyer.tableOrRoomNumber}</Typography>
                                <Typography variant="h3">{buyer.address}</Typography>
                                <Typography variant="h3">{buyer.email}</Typography>
                                <Typography variant="h3">{buyer.phone}</Typography>
                                <Typography>{buyer.type}</Typography>
                            </div>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

