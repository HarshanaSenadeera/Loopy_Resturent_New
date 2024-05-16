import React, {useEffect, useState} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from '@mui/material/CardHeader';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {SelectChangeEvent, Stack, tableCellClasses} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const OrderEdit: React.FC<{
    buyer: any
}> = ({buyer}) => {
    const [expanded, setExpanded] = React.useState(false);
    const [Type, setType] = React.useState('');
    const [DishesType, setDishesType] = useState<string>('');
    const [dishesItem, setDishesItem] = useState<string>('');
    const [relevantDishesItems, setRelevantDishesItems] = useState<string[]>([]);

    const [BottleType, setBottleType] = useState<string>('');
    const [BottleItem, setBottleItem] = useState<string>('');
    const [relevantBottleItems, setRelevantBottleItems] = useState<string[]>([]);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const BottleTypeOnChange = (event: SelectChangeEvent) => {
        setBottleType(event.target.value);
    };
    const BottleItemOnChange = (event: SelectChangeEvent) => {
        setBottleItem(event.target.value);
    };
    useEffect(() => {
        let items1: string[] = [];
        if (BottleType === 'Arack') {
            items1 = ['Kottu', 'Parata', 'Rice'];
        } else if (BottleType === 'Beer') {
            items1 = ['Salad', 'Sushi', 'Gazpacho'];
        } else if (BottleType === 'Soup Dishes') {
            items1 = ['Tomato Soup', 'Chicken Soup', 'Miso Soup'];
        }
        setRelevantBottleItems(items1);
    }, [BottleType]);


    const dishesTypeOnChange = (event: SelectChangeEvent) => {
        setDishesType(event.target.value);
    };
    const dishesItemOnChange = (event: SelectChangeEvent) => {
        setDishesItem(event.target.value);
    };

    const [selectedItem, setSelectedItem] = useState('');

    const [rows, setRows] = useState([]);

    const handleAddButtonClick = () => {
        // Create a new row object with some default data
        const newRow = {
            dishName: 'New Dish',
            price: 10,
            qty: 1,
            amount: 10
        };
        // Update the rows state by adding the new row
        /*setRows(prevRows => [...prevRows, newRow]);*/
    };

    const handleChange = (event:any) => {
        setSelectedItem(event.target.value);
    };


    useEffect(() => {
        let items: string[] = [];
        if (DishesType === 'Hot Dishes') {
            items = ['Kottu', 'Parata', 'Rice'];
        } else if (DishesType === 'Cold Dishes') {
            items = ['Salad', 'Sushi', 'Gazpacho'];
        } else if (DishesType === 'Soup Dishes') {
            items = ['Tomato Soup', 'Chicken Soup', 'Miso Soup'];
        }
        setRelevantDishesItems(items);
    }, [DishesType]);

    /*Table content*/


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <Box sx={{overflowY: 'auto', borderRadius: '20px' , maxHeight:600}}>
            <Grid container spacing={3} sx={{display: 'flex', flexDirection: 'column'}}>
                <Grid item xs={12}>
                    <Card sx={{width: '100%'}}>
                        <CardHeader
                            title="Order Detail"
                            sx={{backgroundColor: '#f5f5f5'}}
                        />
                        <CardContent>
                            <Grid container spacing={2} sx={{marginBottom: '16px'}}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        <span
                                            style={{fontWeight: 600}}>Order Type:</span> {buyer.orderType ? buyer.orderType :
                                        <span style={{color: 'red'}}>non</span>}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{fontWeight: 600}}>Table/Room: </span>{buyer.type1 ? buyer.type1 :
                                        <span style={{color: 'red'}}>non</span>}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{fontWeight: 600}}>

                                            {buyer.type1}:</span> {buyer.tableOrRoomNumber ? buyer.tableOrRoomNumber :
                                        <span style={{color: 'red'}}>non</span>}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{fontWeight: 600}}>Address:</span> {buyer.address ? buyer.address :
                                        <span style={{color: 'red'}}>non</span>}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{fontWeight: 600}}>Email:</span> {buyer.email ? buyer.email :
                                        <span style={{color: 'red'}}>non</span>}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{fontWeight: 600}}>Phone: </span>{buyer.phone ? buyer.phone :
                                        <span style={{color: 'red'}}>non</span>}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span style={{fontWeight: 600}}>Type: </span>{buyer.type ? buyer.type :
                                        <span style={{color: 'red'}}>non</span>}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body1">
                                        <span
                                            style={{fontWeight: 600}}>Waiter: </span>{buyer.waiterType ? buyer.waiterType :
                                        <span style={{color: 'red'}}>non</span>}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>

                        {/*Dishes updater*/}
                        {/*<h2>{BottleItem}</h2>*/}
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Dish name</StyledTableCell>
                                        <StyledTableCell align="right">Price</StyledTableCell>
                                        <StyledTableCell align="right">Qty</StyledTableCell>
                                        <StyledTableCell align="right">Amount</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(
                                        <StyledTableRow >
                                            {/*<StyledTableCell component="th" scope="row">

                                            </StyledTableCell>*/}
                                            <StyledTableCell align="left">{BottleItem}</StyledTableCell>

                                        </StyledTableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>
            </Grid>



            <Grid container xs={12} sx={{padding: '10px', display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>


                <Grid container xs={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button variant="contained" onClick={handleExpandClick}>
                        {expanded ? 'Hide' : 'Add Item'}
                    </Button>
                </Grid>

                <Collapse in={expanded}>
                    <CardContent>
                        <Grid container xs={12} sx={{display: 'flex', gap: '20px'}}>
                            <Grid item xs={12}>
                                <Stack direction="row" spacing={2} sx={{width: '100%'}}>
                                    <FormControl sx={{m: 1, minWidth: 110}} size="small" fullWidth>
                                        <InputLabel id="demo-select-small-label-1" sx={{fontWeight: 600}}>KOT
                                            ORDER</InputLabel>
                                    </FormControl>

                                    <FormControl sx={{m: 1, minWidth: 110}} size="small" fullWidth>
                                        <InputLabel id="dishes-type-label">Dishes</InputLabel>
                                        <Select
                                            labelId="dishes-type-label"
                                            id="dishes-type"
                                            value={DishesType}
                                            label="Dishes"
                                            onChange={dishesTypeOnChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="Hot Dishes">Hot Dishes</MenuItem>
                                            <MenuItem value="Cold Dishes">Cold Dishes</MenuItem>
                                            <MenuItem value="Soup Dishes">Soup Dishes</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl sx={{m: 1, minWidth: 110}} size="small" fullWidth>
                                        <InputLabel id="dishes-item-label">
                                            {DishesType ? `${DishesType} Items` : 'Select a Dish Type'}
                                        </InputLabel>
                                        <Select
                                            labelId="dishes-item-label"
                                            id="dishes-item"
                                            value={dishesItem}
                                            label={`${DishesType} Items`}
                                            onChange={dishesItemOnChange}
                                            disabled={!DishesType}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {relevantDishesItems.map((item, index) => (
                                                <MenuItem key={index} value={item}>
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <Button variant="contained" color="success" onClick={handleAddButtonClick}>
                                        Add
                                    </Button>
                                </Stack>
                            </Grid>

                            {/*--------------------------------------*/}

                            <Grid item xs={12}>
                                <Stack direction="row" spacing={2} sx={{width: '100%'}}>
                                    <FormControl sx={{m: 1, minWidth: 110}} size="small" fullWidth>
                                        <InputLabel id="demo-select-small-label-1" sx={{fontWeight: 600}}>BOT
                                            ORDER</InputLabel>
                                    </FormControl>

                                    <FormControl sx={{m: 1, minWidth: 110}} size="small" fullWidth>
                                        <InputLabel id="bottle-type-label">Bottle</InputLabel>
                                        <Select
                                            labelId="bottle-type-label"
                                            id="bottle-type"
                                            value={BottleType}
                                            label="Bottle"
                                            onChange={BottleTypeOnChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="Arack">Arack</MenuItem>
                                            <MenuItem value="Beer">Beer</MenuItem>
                                            <MenuItem value="Soup Dishes">Soup Dishes</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl sx={{m: 1, minWidth: 110}} size="small" fullWidth>
                                        <InputLabel id="dishes-item-label">
                                            {BottleType ? `${BottleType} Items` : 'Select a Bottle Type'}
                                        </InputLabel>
                                        <Select
                                            labelId="bottle-item-label"
                                            id="bottle-item"
                                            value={BottleItem}
                                            label={`${BottleType} Items`}
                                            onChange={BottleItemOnChange}
                                            disabled={!BottleType}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {relevantBottleItems.map((item1, index) => (
                                                <MenuItem key={index} value={item1}>
                                                    {item1}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <Button variant="contained" color="success">
                                        Add
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>


                    </CardContent>
                </Collapse>
            </Grid>

        </Box>
    );
};

export default OrderEdit;
