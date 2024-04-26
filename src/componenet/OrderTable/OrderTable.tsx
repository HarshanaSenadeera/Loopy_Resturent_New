import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { SelectChangeEvent } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const states = [
    { value: 'Available', label: 'Available' },
    { value: 'Not Available', label: 'Not Available' },
] as const;

export default function OrderTable() {
    const [formData, setFormData] = useState({
        TableNo: '',
        TableName: '',
        NoOfSheets: '',
        item: 'Available', // Default value for the Select component
    });

    const [tableData, setTableData] = useState<any[]>([]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        setTableData([...tableData, formData]);
        setFormData({
            TableNo: '',
            TableName: '',
            NoOfSheets: '',
            item: 'Available',
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name as string]: value as string,
        }));
    };


    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name as string]: value as string,
        }));
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <CardHeader subheader="" title="Tables" />
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Table No</InputLabel>
                                    <OutlinedInput label="Table Number" name="TableNo" type="tel" value={formData.TableNo} onChange={handleChange} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel>Table Name</InputLabel>
                                    <OutlinedInput label="Table Name" name="TableName" value={formData.TableName} onChange={handleChange} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Number of Sheets</InputLabel>
                                    <OutlinedInput label="Number of Sheets" name="NoOfSheets" type="number" value={formData.NoOfSheets} onChange={handleChange} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Item</InputLabel>
                                    <Select value={formData.item} label="Item" name="item" onChange={handleSelectChange} variant="outlined">
                                        {states.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained">Save details</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Table No</TableCell>
                                        {/*<TableCell>Table Name</TableCell>*/}
                                        <TableCell>Number of sheets</TableCell>
                                        <TableCell>Item</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableData.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{row.TableNo}</TableCell>
                                           {/* <TableCell>{row.TableName}</TableCell>*/}
                                            <TableCell>{row.NoOfSheets}</TableCell>
                                            <TableCell>{row.item}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
