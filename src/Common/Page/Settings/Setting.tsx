import * as React from 'react';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {Modal} from "@mui/joy";
import CreateOrder from "../../../componenet/CreateOrder/CreateOrder";
import {Receipt} from "@mui/icons-material";
import {useState} from "react";
import {LocalPharmacyOutlined} from "@material-ui/icons";
import Typography from "@mui/material/Typography";
import AddNewDish from "../../AddDishes/AddDish";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";

export default function SettingMain() {


    const [showComponent, setShowComponent] = useState(false);

    const handleButtonClick = () => {
        setShowComponent(true); // Set showComponent to true when button is clicked
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true); // Set open to true to show the modal
    };

    const handleClose = () => {
        setOpen(false); // Set open to false to hide the modal
    };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const isMediamScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isExtralargeScreen = useMediaQuery(theme.breakpoints.up('xl'));



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <>
                        {/*<Grid item xs={4}>
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
                        </Grid>*/}
                        {/*<Modal
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
                                <CreateOrder/>
                            </Box>
                        </Modal>*/}
                    </>


                    {/*<Grid item xs={4}>
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
                    </Grid>*/}

                    <Grid item xs={4}>
                        <Box sx={{
                            '& button': {
                                m: 1,
                                width: '350px',
                                height: '150px',
                                backgroundColor: '#ffffff',
                                color: '#c52b18',
                                borderRadius: '20px',
                                border: '1px solid #c52b18',
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
                                    startIcon={<LocalPharmacyOutlined />}
                                    onClick={handleOpen} // Call handleOpen function on button click
                                >
                                    Add New Dish
                                </Button>
                            </div>
                        </Box>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    width: 400,
                                    bgcolor: 'background.paper',
                                    border: '2px solid #000',
                                    boxShadow: 24,
                                    p: 4,
                                    ...(isSmallScreen && {
                                        width: '100%', // Adjust width for small screens
                                    }),
                                    ...(isMediamScreen && {
                                        width: '100%', // Adjust width for small screens
                                    }),
                                    ...(isLargeScreen && {
                                        width: '100%', // Adjust width for small screens
                                    }),
                                    ...(isExtralargeScreen && {
                                        width: '100%', // Adjust width for small screens
                                    }),
                                }}
                            >
                                <AddNewDish/>
                            </Box>
                        </Modal>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
