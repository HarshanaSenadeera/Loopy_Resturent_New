import React, {ChangeEvent, FormEvent, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
    GridRowsProp,
    GridRowModesModel,
    GridRowModes,
    DataGrid,
    GridColDef,
    GridToolbarContainer,
    GridActionsCellItem,
    GridEventListener,
    GridRowId,
    GridRowModel,
    GridRowEditStopReasons,
    GridSlots,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import {Stack} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
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

const initialRows: GridRowsProp = [

];

interface EditToolbarProps {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
        newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
    ) => void;
}

function EditToolbar(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                ADD TABLE
            </Button>
        </GridToolbarContainer>
    );
}

export default function AddNewDish() {
    const [rows, setRows] = React.useState(initialRows);

    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id: GridRowId) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow!.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow: GridRowModel) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const handlePhotoUpload = (id: GridRowId) => async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const updatedRows = rows.map((row) => {
            if (row.id === id) {
                return { ...row, photo: URL.createObjectURL(file) };
            }
            return row;
        });
        setRows(updatedRows);
    };

    const columns: GridColDef[] = [
        { field: 'tableName', headerName: 'TableName', width: 180, editable: true },
        {
            field: 'noOfSheets',
            headerName: 'NoOfSheets',
            type: 'number',
            width: 200,
            align: 'left',
            headerAlign: 'left',
            editable: true,
        },
        {
            field: 'availability',
            headerName: 'Availability',
            width: 220,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Available', 'Not Available'],
        },
        {
            field: 'photo',
            headerName: 'Photo',
            width: 220,
            renderCell: ({ id, value }) => (
                <div>
                    {value && <img src={value} alt="Uploaded" style={{ width: 100, height: 100 }} />}
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id={`photo-upload-${id}`}
                        type="file"
                        onChange={handlePhotoUpload(id)}
                    />
                    <label htmlFor={`photo-upload-${id}`}>
                        <Button
                            variant="contained"
                            component="span"
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload
                        </Button>
                    </label>
                </div>
            ),
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    const [photo, setPhoto] = useState<File | null>(null);
    const [Lastname, setLName] = useState<string>('');
    const [Firstname, setFName] = useState<string>('');
    const [photoUrl, setPhotoUrl] = useState<string>('');

    const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPhoto(file);
            const url = URL.createObjectURL(file);
            setPhotoUrl(url);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        //handle the form submission, like uploading the photo and saving the bio to a database
        console.log('Photo:', photo);
        console.log('FName:', Firstname);
        console.log('LName:', Lastname);
    };

    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFName(event.target.value);
    };



    return (

        <Box
            sx={{
                height: 500,
                width: '100%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
            }}
        >

            <>
                <form onSubmit={handleSubmit}>
                    <Stack direction="column" alignItems="center" spacing={2} >
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

                        <Card>
                            <CardHeader subheader="The information can be edited" title="Add Food Dishes"/>
                            <Divider/>
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid md={6} xs={12}>
                                        <FormControl fullWidth required>
                                            <InputLabel>Food ID</InputLabel>
                                            <OutlinedInput label="FoodID" name="FoodId"
                                                           onChange={handleFirstNameChange}/>
                                        </FormControl>
                                    </Grid>
                                    <Grid md={6} xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel>Name</InputLabel>
                                            <OutlinedInput label="Name"/>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider/>
                           {/* <CardActions sx={{justifyContent: 'flex-end'}}>
                                <Button type="submit" variant="contained">Save details</Button>
                            </CardActions>*/}
                        </Card>
                        {/* </form>*/}

                    </Stack>
                </form>
            </>


            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slots={{
                    toolbar: EditToolbar as GridSlots['toolbar'],
                }}
                slotProps={{
                    toolbar: {setRows, setRowModesModel},
                }}
            />

        </Box>
    );
}
