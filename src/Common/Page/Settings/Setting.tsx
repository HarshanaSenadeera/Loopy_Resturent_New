// SettingMain.js

import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Modal } from "@mui/joy";
import CreateOrder from "../../../componenet/CreateOrder/CreateOrder";
import { LocalPharmacyOutlined } from "@material-ui/icons";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

interface Order {
    OrderNum: string;
    address: string;
    email: string;
    phone: string;
    item: string;
    type: string;
}

export default function SettingMain() {
    const [open, setOpen] = useState(false);
    const [buyerList, setBuyerList] = useState<Order[]>([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateTable = (newOrder: Order) => {
        setBuyerList(prevList => [...prevList, newOrder]); // Update the buyerList state with the new order
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

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
                                    backgroundColor: '#c52b18',
                                    color: '#ffffff',
                                }
                            }
                        }}>
                            <div>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<LocalPharmacyOutlined />}
                                    onClick={handleOpen}
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
                            <Box sx={{
                                position: 'absolute',
                                width: 400,
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                            }}>
                                {/* Pass updateTable function as a prop */}
                                <CreateOrder updateTable={updateTable} />
                            </Box>
                        </Modal>
                    </Grid>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>OrderNum</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Item</TableCell> {/* Adding a new TableCell for Item */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {buyerList.map((buyer, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{buyer.OrderNum}</TableCell>
                                        <TableCell>{buyer.address}</TableCell>
                                        <TableCell>{buyer.email}</TableCell>
                                        <TableCell>{buyer.phone}</TableCell>
                                        <TableCell>{buyer.type}</TableCell> {/* Displaying the selected radio button value */}
                                        <TableCell>{buyer.type === 'KOT' ? buyer.item : ''}</TableCell> {/* Displaying the item only if KOT is selected */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </Grid>
                </Grid>
            </Box>

        </>
    );
}
