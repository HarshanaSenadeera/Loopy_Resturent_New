import React, {ChangeEvent, FormEvent, useState} from "react";
import {Stack} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import {InputAdornment} from "@material-ui/core";
import {VisibilityOff} from "@material-ui/icons";
import {Visibility} from "@mui/icons-material";
import avetar from "../../images/Loopy_logo_new-removebg-preview.png"
import CircularIntegration from "../AcceptButton/AceptButton";

const ForgotPass: React.FC = () => {

    const [photo, setPhoto] = useState<File | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        //handle the form submission, like uploading the photo and saving the bio to a database
        console.log('Photo:', photo);

    };

    const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPhoto(file);
            const url = URL.createObjectURL(file);
            setPhotoUrl(url);
        }
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

   return (

       <form onSubmit={handleSubmit}>
           <Stack direction="column" alignItems="center" spacing={2}>
               <Avatar
                   alt="Remy Sharp"
                   src={avetar}
                   sx={{width: 100, height: 100}}
               />

               <Grid container spacing={2} justifyContent={"center"}>
                   <Grid item xs={12} sm={6} md={4}>
                       <FormControl sx={{m: 1, width: '100%'}} variant="outlined">
                           <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
                           <OutlinedInput
                               id="outlined-adornment-password"
                               type={showPassword ? 'text' : 'password'}
                               endAdornment={
                                   <InputAdornment position="end">
                                       <IconButton
                                           aria-label="toggle password visibility"
                                           onClick={handleClickShowPassword}
                                           onMouseDown={handleMouseDownPassword}
                                           edge="end"
                                       >
                                           {showPassword ? <VisibilityOff/> : <Visibility/>}
                                       </IconButton>
                                   </InputAdornment>
                               }
                               label="Current Password"
                           />
                       </FormControl>
                   </Grid>
               </Grid>
               <Grid container spacing={2} justifyContent={"center"}>
                   <Grid item xs={12} sm={6} md={4}>
                       <FormControl sx={{m: 1, width: '100%'}} variant="outlined">
                           <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                           <OutlinedInput
                               id="outlined-adornment-password"
                               type={showPassword ? 'text' : 'New Password'}
                               endAdornment={
                                   <InputAdornment position="end">
                                       <IconButton
                                           aria-label="toggle password visibility"
                                           onClick={handleClickShowPassword}
                                           onMouseDown={handleMouseDownPassword}
                                           edge="end"
                                       >
                                           {showPassword ? <VisibilityOff/> : <Visibility/>}
                                       </IconButton>
                                   </InputAdornment>
                               }
                               label="Current Password"
                           />
                       </FormControl>
                   </Grid>
               </Grid>
               <Grid container spacing={2} justifyContent={"center"}>
                   <Grid item xs={12} sm={6} md={4}>
                       <FormControl sx={{m: 1, width: '100%'}} variant="outlined">
                           <InputLabel htmlFor="outlined-adornment-password">Re-Enter New Password</InputLabel>
                           <OutlinedInput
                               id="outlined-adornment-password"
                               type={showPassword ? 'text' : 'Re-Enter New Password'}
                               endAdornment={
                                   <InputAdornment position="end">
                                       <IconButton
                                           aria-label="toggle password visibility"
                                           onClick={handleClickShowPassword}
                                           onMouseDown={handleMouseDownPassword}
                                           edge="end"
                                       >
                                           {showPassword ? <VisibilityOff/> : <Visibility/>}
                                       </IconButton>
                                   </InputAdornment>
                               }
                               label="Current Password"
                           />
                       </FormControl>
                   </Grid>
               </Grid>

               <Grid container spacing={2} justifyContent="center" alignItems="center">
                   <FormControl>
                       <Grid item xs={12} sm={6} md={4} lg={2} xl={16}>
                           <CircularIntegration/>
                       </Grid>
                   </FormControl>
               </Grid>



           </Stack>
       </form>

   );
}

export default ForgotPass;

