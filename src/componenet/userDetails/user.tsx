import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
import {ChangeEvent, FormEvent, useState} from "react";
import {Stack} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const ProfileForm: React.FC = () => {
    const [photo, setPhoto] = useState<File | null>(null);
    const [Lastname, setLName] = useState<string>('');
    const [Firstname, setFName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [photoUrl, setPhotoUrl] = useState<string>('');
    const [phone,setPhoneNum]=useState<string>('');


    const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPhoto(file);
            const url = URL.createObjectURL(file);
            setPhotoUrl(url);
        }
    };

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
        { value: 'Male', label: 'Male' },
        { value: 'Fe-male', label: 'Fe-male' },
    ] as const;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        //handle the form submission, like uploading the photo and saving the bio to a database
        console.log('Photo:', photo);
        console.log('FName:', Firstname);
        console.log('LName:', Lastname);
        console.log('Address:', address);
        console.log('Email:', email);
        console.log('Phone:', phone);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack direction="column" alignItems="center" spacing={2}>
                {photoUrl && (
                    <Avatar alt="User Photo" src={photoUrl} sx={{width: 120, height: 120}}/>
                )}
                <input
                    accept="image/*"
                    style={{display: 'none'}}
                    id="photo-input"
                    type="file"
                    onChange={handlePhotoChange}
                />
                <label htmlFor="photo-input">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera/>
                    </IconButton>
                </label>


               {/* <form
                    onSubmit={(event) => {
                        event.preventDefault();
                    }}
                >*/}
                    <Card>
                        <CardHeader subheader="The information can be edited" title="Profile"/>
                        <Divider/>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid md={6} xs={12}>
                                    <FormControl fullWidth required>
                                        <InputLabel>First name</InputLabel>
                                        <OutlinedInput  label="First name" name="firstName"
                                                       onChange={handleFirstNameChange}/>

                                    </FormControl>
                                </Grid>
                                <Grid md={6} xs={12}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Last name</InputLabel>
                                        <OutlinedInput label="Last name" name="lastName"
                                                       onChange={handleLastNameChange}/>
                                    </FormControl>
                                </Grid>
                                <Grid md={6} xs={12}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Email address</InputLabel>
                                        <OutlinedInput  label="Email address"
                                                       name="email"
                                                       onChange={handleEmailChange}/>
                                    </FormControl>
                                </Grid>
                                <Grid md={6} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel>Phone number</InputLabel>
                                        <OutlinedInput label="Phone number" name="phone" type="tel"
                                                       onChange={handlePhoneNumber}/>
                                    </FormControl>
                                </Grid>
                                <Grid md={6} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel>Gender</InputLabel>
                                        <Select defaultValue="Male" label="State" name="state" variant="outlined">
                                        {states.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid md={6} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel>City</InputLabel>
                                        <OutlinedInput label="City"/>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Divider/>
                        <CardActions sx={{justifyContent: 'flex-end'}}>
                            <Button type="submit" variant="contained">Save details</Button>
                        </CardActions>
                    </Card>
               {/* </form>*/}

            </Stack>
        </form>
    );
};

export default ProfileForm;
