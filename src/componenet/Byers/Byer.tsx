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
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import {visuallyHidden} from "@mui/utils";
import TableHead from "@mui/material/TableHead";

export const Buyers = () => {
    const [buyerList, setBuyerList] = useState<{
        firstname: string;
        lastname: string;
        address: string;
        email: string;
        phone: string;
        item: string;
    }[]>([]);

    const [buyerDetails, setBuyerDetails] = useState({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        phone: "",
        item: "Milo", // Default value for the Select component
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | {
        name?: string;
        value: unknown
    }>) => {
        const {name, value} = event.target;
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

    /*Table content*/

    interface Data {
        id: number;
        calories: number;
        carbs: number;
        fat: number;
        name: string;
        protein: number;
    }

    function createData(
        id: number,
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
    ): Data {
        return {
            id,
            name,
            calories,
            fat,
            carbs,
            protein,
        };
    }

    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    type Order = 'asc' | 'desc';

    function getComparator<Key extends keyof any>(
        order: Order,
        orderBy: Key,
    ): (
        a: { [key in Key]: number | string },
        b: { [key in Key]: number | string },
    ) => number {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
        const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    interface HeadCell {
        disablePadding: boolean;
        id: keyof Data;
        label: string;
        numeric: boolean;
    }


    const headCells: readonly HeadCell[] = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Byer Name',
        },
        {
            id: 'calories',
            numeric: true,
            disablePadding: false,
            label: 'Date',
        },
        {
            id: 'fat',
            numeric: true,
            disablePadding: false,
            label: 'QTY',
        },
        {
            id: 'carbs',
            numeric: true,
            disablePadding: false,
            label: 'Price',
        },
        {
            id: 'protein',
            numeric: true,
            disablePadding: false,
            label: 'Item',
        },
    ];

    interface EnhancedTableProps {
        numSelected: number;
        onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
        onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
        order: Order;
        orderBy: string;
        rowCount: number;
    }

    function EnhancedTableHead(props: EnhancedTableProps) {
        const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
            props;
        const createSortHandler =
            (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
                onRequestSort(event, property);
            };

        return (
            <form onSubmit={handleSubmit}>
                <Stack direction="column" alignItems="center" spacing={2}>
                    <Card>
                        <CardHeader subheader="" title="Buyers"/>
                        <Divider/>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Buyer First Name</InputLabel>
                                        <OutlinedInput label="First name" name="firstname"
                                                       value={buyerDetails.firstname} onChange={handleInputChange}/>
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Buyer Last Name</InputLabel>
                                        <OutlinedInput label="Last name" name="lastname" value={buyerDetails.lastname}
                                                       onChange={handleInputChange}/>
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Address</InputLabel>
                                        <OutlinedInput label="Address" name="address" value={buyerDetails.address}
                                                       onChange={handleInputChange}/>
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Email</InputLabel>
                                        <OutlinedInput label="Email" name="email" value={buyerDetails.email}
                                                       onChange={handleInputChange}/>
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Phone</InputLabel>
                                        <OutlinedInput label="Phone" name="phone" value={buyerDetails.phone}
                                                       onChange={handleInputChange}/>
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel>Item</InputLabel>
                                        <Select value={buyerDetails.item} label="Item" name="item"
                                                onChange={handleSelectChange} variant="outlined">
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
                        <Divider/>
                        <CardActions sx={{justifyContent: 'flex-end'}}>
                            <Button type="submit" variant="contained">Save Details</Button>
                        </CardActions>
                    </Card>
                    <EditableTable buyerList={buyerList}/>
                </Stack>

                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                indeterminate={numSelected > 0 && numSelected < rowCount}
                                checked={rowCount > 0 && numSelected === rowCount}
                                onChange={onSelectAllClick}
                                inputProps={{
                                    'aria-label': 'select all desserts',
                                }}
                            />
                        </TableCell>
                        {headCells.map((headCell) => (
                            <TableCell
                                key={headCell.id}
                                align={headCell.numeric ? 'right' : 'left'}
                                padding={headCell.disablePadding ? 'none' : 'normal'}
                                sortDirection={orderBy === headCell.id ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={createSortHandler(headCell.id)}
                                >
                                    {headCell.label}
                                    {orderBy === headCell.id ? (
                                        <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
            </form>
        );
    };

// Editable Table Component
    const EditableTable: React.FC<{ buyerList: any[] }> = ({buyerList}) => {
        return (
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Item</th>
                </tr>
                </thead>
                <tbody>
                {buyerList.map((buyer, index) => (
                    <tr key={index}>
                        <td>{buyer.firstname}</td>
                        <td>{buyer.lastname}</td>
                        <td>{buyer.address}</td>
                        <td>{buyer.email}</td>
                        <td>{buyer.phone}</td>
                        <td>{buyer.item}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    };
}
