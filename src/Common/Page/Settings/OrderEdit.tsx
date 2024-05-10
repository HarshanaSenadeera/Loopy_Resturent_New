import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { RadioGroup, SelectChangeEvent, Stack } from '@mui/material';
import { FormLabel, Radio } from "@mui/joy";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useOrderContext} from "./OrderProvider";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



interface Buyer {
    orderType:string;
    type1:string;
    tableOrRoomNumber:string
    address: string;
    email: string;
    phone: string;
    item: string;
    item2: string;
    type:string,
    OrderNum: string; // Add OrderNum property

}

interface Props {
    buyerList: Buyer[];
/*
    setBuyerList: React.Dispatch<React.SetStateAction<Buyer[]>>; // Function to set buyerList state
*/

}

export const OrderEdit: React.FC<Props> = ({ buyerList }) => {
    useEffect(() => {
        if (buyerList.length > 0) {
            const initialBuyer = buyerList[0]; // Get the first item from the list
            setBuyerDetails({
                orderType:initialBuyer.orderType,
                type1:initialBuyer.type1,
                tableOrRoomNumber:initialBuyer.tableOrRoomNumber,
                address: initialBuyer.address,
                email: initialBuyer.email,
                phone: initialBuyer.phone,
                item: initialBuyer.item,
                item2: initialBuyer.item2,
                type:initialBuyer.type
            });
            setSelectedValue(initialBuyer.type === 'KOT' ? 'KOT' : 'BOT');

        }
    }, [buyerList]);


    const { updateSettingTable } = useOrderContext();
    const [buyerDetails, setBuyerDetails] = useState({
        orderType:"",
        type1:"",
        tableOrRoomNumber:"",
        address: "",
        email: "",
        phone: "",
        item: "",
        item2:"",
        type:"",


    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
        const { name, value } = event.target;
        setBuyerDetails(prevState => ({
            ...prevState,
            [name as string]: value as string,
        }));
    };

    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value;
        setBuyerDetails(prevState => ({
            ...prevState,
            item: value,
        }));
    };
    const handleSelectChange2 = (event: SelectChangeEvent<string>) => {
        const value = event.target.value;
        setBuyerDetails(prevState => ({
            ...prevState,
            item2: value,
        }));
    };



    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (orderType) {
            let tableOrRoomNumber = ''; // Initialize to empty string

            if (orderType === 'Dining') {
                if (Type === 'Table') {
                    tableOrRoomNumber = tableType;
                } else if (Type === 'Room') {
                    tableOrRoomNumber = roomType;
                }
            }

            const newBuyerDetails = {
                ...buyerDetails,
                type: selectedValue,
                item: selectedValue === 'KOT' ? buyerDetails.item : '',
                item2:selectedValue === 'BOT' ? buyerDetails.item2 : '',
                OrderNum: String(buyerList.length + 1),
                orderType: orderType,
                type1: Type,
                tableOrRoomNumber: tableOrRoomNumber, // Set to appropriate value based on order type and table/room selection
            };

            // Update the SettingMain table data with the new order
            updateSettingTable(newBuyerDetails);

            // Reset the buyer details state
            setBuyerDetails({
                type:"",
                orderType:"",
                type1:"",
                tableOrRoomNumber:"",
                address: "",
                email: "",
                phone: "",
                item: "",
                item2:""
            });
        } else {
            console.error('Order type must be selected');
        }
    };



    const [orderType, setOrderType] = React.useState('');
    const [Type, setType] = React.useState('');
    const [tableType, setTableType] = React.useState('');
    const [roomType, setRoomType] = React.useState('');
    const [KOT, setKOTType] = React.useState('');
    const [BOT, setBOTType] = React.useState('');

    const orderTypeOnChange = (event: SelectChangeEvent) => {
        setOrderType(event.target.value);
    };

    const typeOnChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };
    const tableTypeOnChange = (event: SelectChangeEvent) => {
        setTableType(event.target.value);
    };
    const roomTypeOnChange = (event: SelectChangeEvent) => {
        setRoomType(event.target.value);
    };


    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (

        <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Card>
                            <CardHeader subheader="" title="Orders"/>
                            <Divider/>
                            <CardContent>
                                <Stack direction="column" spacing={2}>

                                    {/*First Grid*/}
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6} md={6} lg={6}>
                                            <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                                                <Box sx={{ display: 'flex', gap: 2 }}>
                                                    <Radio
                                                        label="KOT"
                                                        checked={selectedValue === 'KOT'}
                                                        onChange={handleChange}
                                                        value={buyerDetails.type}
                                                        name="radio-buttons"
                                                        slotProps={{ input: { 'aria-label': 'A' } }}
                                                    />
                                                    <Radio
                                                        label="BOT"
                                                        checked={selectedValue === 'BOT'}
                                                        onChange={handleChange}
                                                        value={buyerDetails.type}
                                                        name="radio-buttons"
                                                        slotProps={{ input: { 'aria-label': 'B' } }}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Grid>

                                        <Grid item xs={11} sm={5} md={5} lg={5}>
                                            <Stack>
                                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
                                                    <InputLabel id="demo-select-small-label-1">Order Type</InputLabel>
                                                    <Select
                                                        labelId="demo-select-small-label-1"
                                                        id="demo-select-small-1"
                                                        value={buyerDetails.orderType}
                                                        label="Age"
                                                        onChange={orderTypeOnChange}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value="Dining">Dining </MenuItem>
                                                        <MenuItem value="Take Away">Take Away</MenuItem>
                                                        <MenuItem value="Online">Online</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Stack>
                                        </Grid>
                                    </Grid>


                                    {orderType !== 'Take Away' && orderType !== 'Online' && (
                                        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                                            <FormControl sx={{ m: 1, minWidth: 110 }} size="small" fullWidth>
                                                <InputLabel id="demo-select-small-label-1">Type</InputLabel>
                                                <Select
                                                    labelId="demo-select-small-label-1"
                                                    id="demo-select-small-1"
                                                    value={buyerDetails.type1}
                                                    label="Type"
                                                    onChange={typeOnChange}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value="Table">Table</MenuItem>
                                                    <MenuItem value="Room">Room</MenuItem>
                                                </Select>
                                            </FormControl>

                                            <FormControl sx={{ m: 1, minWidth: 110 }} size="small" fullWidth>
                                                <InputLabel id="demo-select-small-label-2">Table</InputLabel>
                                                <Select
                                                    labelId="demo-select-small-label-2"
                                                    id="demo-select-small-2"
                                                    value={buyerDetails.tableOrRoomNumber}
                                                    label="Table"
                                                    onChange={tableTypeOnChange}
                                                    disabled={Type === 'Room'}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value="Table 01">Table 01</MenuItem>
                                                    <MenuItem value="Table 02">Table 02</MenuItem>
                                                    <MenuItem value="Table 03">Table 03</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl sx={{ m: 1, minWidth: 110 }} size="small" fullWidth>
                                                <InputLabel id="demo-select-small-label-2">Room</InputLabel>
                                                <Select
                                                    labelId="demo-select-small-label-2"
                                                    id="demo-select-small-2"
                                                    value={roomType}
                                                    label="Room"
                                                    onChange={roomTypeOnChange}
                                                    disabled={Type === 'Table'} // Disable when Table is selected
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value="Room 01">Room 01</MenuItem>
                                                    <MenuItem value="Room 02">Room 02</MenuItem>
                                                    <MenuItem value="Room 03">Room 03</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Stack>
                                    )}

                                    <FormControl fullWidth required>
                                        <InputLabel>Address</InputLabel>
                                        <OutlinedInput label="Address" name="address" value={buyerDetails.address} onChange={handleInputChange}  disabled={Type === 'Room' || Type === 'Table'}/>
                                    </FormControl>
                                    <FormControl fullWidth required>
                                        <InputLabel>Email</InputLabel>
                                        <OutlinedInput label="Email" name="email" value={buyerDetails.email} onChange={handleInputChange} disabled={Type === 'Room' || Type === 'Table'}/>
                                    </FormControl>
                                    <FormControl fullWidth required>
                                        <InputLabel>Phone</InputLabel>
                                        <OutlinedInput label="Phone" name="phone" value={buyerDetails.phone} onChange={handleInputChange} disabled={Type === 'Table' || orderType === 'Take Away'}/>
                                    </FormControl>

                                    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                                        <FormControl fullWidth>
                                            <InputLabel>KOT</InputLabel>
                                            <Select value={buyerDetails.item} label="Item" name="item" onChange={handleSelectChange} variant="outlined" disabled={selectedValue === 'BOT'}>
                                                <MenuItem value="Milo">Milo</MenuItem>
                                                <MenuItem value="Cocacola">Cocacola</MenuItem>
                                                <MenuItem value="Fanta">Fanta</MenuItem>
                                                <MenuItem value="Potelo">Potelo</MenuItem>
                                                <MenuItem value="Sprit">Sprit</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl fullWidth>
                                            <InputLabel>BOT</InputLabel>
                                            <Select value={buyerDetails.item2} label="Item" name="item"  onChange={handleSelectChange2} variant="outlined" disabled={selectedValue === 'KOT'}>
                                                <MenuItem value="Milo">Milo</MenuItem>
                                                <MenuItem value="Cocacola">Cocacola</MenuItem>
                                                <MenuItem value="Fanta">Fanta</MenuItem>
                                                <MenuItem value="Potelo">Potelo</MenuItem>
                                                <MenuItem value="Sprit">Sprit</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Stack>

                                </Stack>
                            </CardContent>
                            <Divider/>
                            <CardActions sx={{justifyContent: 'flex-end'}}>
                                <Link to='/dish'>
                                    <Button type="submit" variant="contained">Add Item</Button>
                                </Link>

                                <Button type="submit" variant="contained" >Edit Detail</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </form>
    );
}

