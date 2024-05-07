import React, { useState, ChangeEvent, FormEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Grid, FormControl, InputLabel, OutlinedInput, Divider } from '@mui/material';

// Component for adding sub-dishes
function SubDishForm({
                         index,
                         onSubDishChange,
                         onSubDishImageChange
                     }: {
    index: number;
    onSubDishChange: (index: number, value: string) => void;
    onSubDishImageChange: (index: number, file: File | null) => void;
}) {
    const [subDishName, setSubDishName] = useState<string>('');
    const [subDishImage, setSubDishImage] = useState<File | null>(null);

    const handleSubDishChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSubDishName(value);
        onSubDishChange(index, value);
    };

    const handleSubDishImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            const file = fileList[0];
            setSubDishImage(file);
            onSubDishImageChange(index, file);
        }
    };

    return (
        <FormControl fullWidth>
            <InputLabel>Sub Dish Name</InputLabel>
            <OutlinedInput label="Sub Dish Name" value={subDishName} onChange={handleSubDishChange} />
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id={`sub-dish-image-upload-${index}`}
                type="file"
                onChange={handleSubDishImageChange}
            />
            <label htmlFor={`sub-dish-image-upload-${index}`}>
                <Button variant="contained" component="span" startIcon={<AddIcon />}>
                    Upload Sub Dish Image
                </Button>
            </label>
            {subDishImage && (
                <img src={URL.createObjectURL(subDishImage)} alt={`Sub Dish ${index + 1}`} style={{ marginTop: '10px', maxWidth: '100px' }} />
            )}
        </FormControl>
    );
}

// Component for adding main dish information along with sub-dishes
export default function AddDish() {
    const [mainDishName, setMainDishName] = useState<string>('');
    const [mainDishImage, setMainDishImage] = useState<File | null>(null);
    const [subDishes, setSubDishes] = useState<{ name: string; image: File | null }[]>([]);

    const handleMainDishChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMainDishName(event.target.value);
    };

    const handleMainDishImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            const file = fileList[0];
            setMainDishImage(file);
        }
    };

    const handleSubDishChange = (index: number, value: string) => {
        const updatedSubDishes = [...subDishes];
        updatedSubDishes[index].name = value;
        setSubDishes(updatedSubDishes);
    };

    const handleSubDishImageChange = (index: number, file: File | null) => {
        const updatedSubDishes = [...subDishes];
        updatedSubDishes[index].image = file;
        setSubDishes(updatedSubDishes);
    };

    const handleAddSubDish = () => {
        setSubDishes([...subDishes, { name: '', image: null }]);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
        console.log('Main Dish Name:', mainDishName);
        console.log('Main Dish Image:', mainDishImage);
        console.log('Sub Dishes:', subDishes);
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel>Main Dish Name</InputLabel>
                    <OutlinedInput label="Main Dish Name" value={mainDishName} onChange={handleMainDishChange} />
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="main-dish-image-upload"
                        type="file"
                        onChange={handleMainDishImageChange}
                    />
                    <label htmlFor="main-dish-image-upload">
                        <Button variant="contained" component="span" startIcon={<AddIcon />}>
                            Upload Main Dish Image
                        </Button>
                    </label>
                    {mainDishImage && (
                        <img
                            src={URL.createObjectURL(mainDishImage)}
                            alt="Main Dish"
                            style={{ marginTop: '10px', maxWidth: '100px' }}
                        />
                    )}
                </FormControl>
                <Divider sx={{ my: 2 }} />
                <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}> {/* Adjust based on the screen size */}
                        {subDishes.map((_, index) => (
                            <SubDishForm
                                key={index}
                                index={index}
                                onSubDishChange={handleSubDishChange}
                                onSubDishImageChange={handleSubDishImageChange}
                            />
                        ))}
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<AddIcon />}
                            onClick={handleAddSubDish}
                        >
                            Add Sub Dish
                        </Button>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
            </form>
        </Box>
    );
}
