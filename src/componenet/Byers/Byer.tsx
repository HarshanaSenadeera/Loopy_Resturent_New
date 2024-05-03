import {SelectChangeEvent, Stack} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

export const Buyers = () => {
    const [buyerList, setBuyerList] = useState<{ firstname: string; lastname: string; address: string; email: string; phone: string; item: string; }[]>([]);

    const [buyerDetails, setBuyerDetails] = useState({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        phone: "",
        item: "Milo", // Default value for the Select component
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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setBuyerList(prevList => [...prevList, buyerDetails]);
        setBuyerDetails({
            firstname: "",
            lastname: "",
            address: "",
            email: "",
            phone: "",
            item: "Milo",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack direction="column" alignItems="center" spacing={2}>
                <Card>
                    <CardHeader subheader="" title="Buyers" />
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel>Buyer First Name</InputLabel>
                                    <OutlinedInput label="First name" name="firstname" value={buyerDetails.firstname} onChange={handleInputChange} />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel>Buyer Last Name</InputLabel>
                                    <OutlinedInput label="Last name" name="lastname" value={buyerDetails.lastname} onChange={handleInputChange} />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel>Address</InputLabel>
                                    <OutlinedInput label="Address" name="address" value={buyerDetails.address} onChange={handleInputChange} />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel>Email</InputLabel>
                                    <OutlinedInput label="Email" name="email" value={buyerDetails.email} onChange={handleInputChange} />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel>Phone</InputLabel>
                                    <OutlinedInput label="Phone" name="phone" value={buyerDetails.phone} onChange={handleInputChange} />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Item</InputLabel>
                                    <Select value={buyerDetails.item} label="Item" name="item" onChange={handleSelectChange} variant="outlined">
                                        <MenuItem value="Milo">Milo</MenuItem>
                                        <MenuItem value="Cocacola">Cocacola</MenuItem>
                                        <MenuItem value="Fanta">Fanta</MenuItem>
                                        <MenuItem value="Potelo">Potelo</MenuItem>
                                        <MenuItem value="Sprit">Sprit</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                        <Button type="submit" variant="contained">Save Details</Button>
                    </CardActions>
                </Card>
                <EditableTable buyerList={buyerList} />
            </Stack>
        </form>
    );
};

// Editable Table Component
const EditableTable: React.FC<{ buyerList: any[] }> = ({ buyerList }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Item</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {buyerList.map((buyer, index) => (
                    <TableRow key={index}>
                        <TableCell>{buyer.firstname}</TableCell>
                        <TableCell>{buyer.lastname}</TableCell>
                        <TableCell>{buyer.address}</TableCell>
                        <TableCell>{buyer.email}</TableCell>
                        <TableCell>{buyer.phone}</TableCell>
                        <TableCell>{buyer.item}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
