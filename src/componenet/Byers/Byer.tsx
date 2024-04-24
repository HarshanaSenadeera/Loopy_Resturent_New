import {Stack} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {ChangeEvent, FormEvent, useState} from "react";
import NumberInputIntroduction from "../../Common/Counter/Counter";
import ClearableProp from "../../Common/Date/Date";
import CollapsibleTable from "../../Common/Table/Table";

export const Byers = () => {


    const [Lastname, setLName] = useState<string>('');
    const [Firstname, setFName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone,setPhoneNum]=useState<string>('');

    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFName(event.target.value);
    };

    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLName(event.target.value);
    };

    const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) =>{
        setPhoneNum(event.target.value);
    };

    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const states = [
        { value: 'Milo', label: 'Milo' },
        { value: 'Cocacola', label: 'Cocacola' },
        { value: 'Fanta', label: 'Fanta' },
        { value: 'Potelo', label: 'Potelo' },
        { value: 'Sprit', label: 'Sprit' },
    ] as const;

    const handleSubmit=(event :FormEvent<HTMLFormElement>) => {
        console.log('FName:', Firstname);
        console.log('LName:', Lastname);
        console.log('Address:', address);
        console.log('Email:', email);
        console.log('Phone:', phone);
    }

    return (


        <form onSubmit={handleSubmit}>
            <Stack direction="column" alignItems="center" spacing={2}>
                <Card>
                    <CardHeader subheader="" title="Byers"/>
                    <Divider/>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid md={6} xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel>Byer name</InputLabel>
                                    <OutlinedInput label="First name" name="firstName"
                                                   onChange={handleFirstNameChange}/>
                                </FormControl>
                            </Grid>
                            <Grid md={6} xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel>Date</InputLabel>
                                    <ClearableProp/>
                                </FormControl>
                            </Grid>
                            <Grid md={6} xs={12}>
                                <FormControl fullWidth required>
                                   <NumberInputIntroduction/>
                                </FormControl>
                            </Grid>
                            <Grid md={6} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Price</InputLabel>
                                    <OutlinedInput label="Phone number" name="phone" type="tel"
                                                   onChange={handlePhoneNumber}/>
                                </FormControl>
                            </Grid>
                            <Grid md={12} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Item</InputLabel>
                                    <Select defaultValue="Milo" label="State" name="state" variant="outlined">
                                        {states.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider/>
                    <CardActions sx={{justifyContent: 'flex-end'}}>
                        <Button type="submit" variant="contained">Save details</Button>
                    </CardActions>
                </Card>
                <CollapsibleTable/>
            </Stack>
        </form>

    );
};
