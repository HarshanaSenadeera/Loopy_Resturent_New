import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, Avatar, Stack, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const ProfileForm: React.FC = () => {
    const [photo, setPhoto] = useState<File | null>(null);
    const [bio, setBio] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [photoUrl, setPhotoUrl] = useState<string>('');

    const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPhoto(file);
            const url = URL.createObjectURL(file);
            setPhotoUrl(url);
        }
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleBioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBio(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Here you can handle the form submission, like uploading the photo and saving the bio to a database
        console.log('Photo:', photo);
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('Email:', email);
        console.log('Bio:', bio);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack direction="column" alignItems="center" spacing={2}>
                {photoUrl && (
                    <Avatar alt="User Photo" src={photoUrl} sx={{ width: 120, height: 120 }} />
                )}
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="photo-input"
                    type="file"
                    onChange={handlePhotoChange}
                />
                <label htmlFor="photo-input">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={handleNameChange}
                    />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        id="address"
                        label="Address"
                        variant="outlined"
                        fullWidth
                        value={address}
                        onChange={handleAddressChange}
                    />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                    />
                </FormControl>
                {/*<FormControl sx={{ width: '100%' }}>
                    <TextField
                        id="bio"
                        label="Bio"
                        value={bio}
                        onChange={handleBioChange}
                        variant="outlined"
                    />
                </FormControl>*/}
                <Button variant="contained" type="submit">Save</Button>
            </Stack>
        </form>
    );
};

export default ProfileForm;
