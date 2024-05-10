import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {CardHeader} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import {Liquor, OutdoorGrill, Receipt, TableBar} from "@mui/icons-material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {BorderColor} from "@material-ui/icons";
import {useState} from "react";
import {Modal} from "@mui/joy";
import CreateOrder from "../CreateOrder/CreateOrder";
interface Order {
    OrderNum: string;
    address: string;
    email: string;
    phone: string;
    item: string;
    type: string;
}
export default function ButtonSizes() {

    const [open, setOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState<any>(null); // Provide type or interface for orderDetails
    const [buyerList, setBuyerList] = useState<Order[]>([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <>
                        <Grid item xs={4}>
                            <Box sx={{
                                '& button': {
                                    m: 1,
                                    width: '350px',
                                    height: '150px',
                                    backgroundColor: '#ffffff',
                                    color: '#c52b18',
                                    borderRadius: '20px',
                                    border:' 1px solid #c52b18',
                                    '&:hover': {
                                        backgroundColor: '#c52b18', // Change hover background color
                                        color: '#ffffff', // Change hover text color
                                    }

                                }
                            }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        startIcon={<BorderColorIcon/>}
                                        onClick={handleOpen} // Open the modal on button click
                                    >
                                        Create Order
                                    </Button>
                                </div>
                            </Box>
                        </Grid>
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
                                width: {
                                    xs: '90%',
                                    sm: 500,
                                    md: 600,
                                    lg: 800,
                                    xl: 900
                                },
                                bgcolor: 'background.paper',
                                boxShadow: 24,
                                p: 4,
                            }}>
                                <CreateOrder  />
                            </Box>
                        </Modal>
                    </>


                    <Grid item xs={4}>
                        <Box sx={{
                            '& button': {
                                m: 1,
                                width: '350px',
                                height: '150px',
                                backgroundColor: '#c52b18',
                                color: 'white'
                            }
                        }}>
                            <div>
                                <Button variant="contained" size="large">
                                    Create Order
                                </Button>
                            </div>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Box sx={{
                            '& button': {
                                m: 1,
                                width: '350px',
                                height: '150px',
                                backgroundColor: '#ffffff',
                                color: '#c52b18',
                                borderRadius: '20px',
                                border:' 1px solid #c52b18',
                                '&:hover': {
                                    backgroundColor: '#c52b18', // Change hover background color
                                    color: '#ffffff', // Change hover text color
                                }

                            }
                        }}>
                            <div>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<Receipt/>}
                                >
                                    Invoices
                                </Button>
                            </div>
                        </Box>
                    </Grid>


                </Grid>
            </Box>

        </>

    );
}
