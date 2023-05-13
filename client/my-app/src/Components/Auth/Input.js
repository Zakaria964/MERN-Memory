import React from "react";
import {
  Avatar,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
/* -------------------------------------------------------------------------- */

const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth={true}
        label={label}
        autoFocus={autoFocus}
        type={type}
        // InputProps={
        //   name === "password" && {
        //     endAdornment: (
        //       <InputAdornment position="end">
        //         <IconButton onClick={handleShowPassword}>
        //           {type === "password" ? <Visibility /> : <VisibilityOff />}
        //         </IconButton>
        //       </InputAdornment>
        //     ),
        //   }
        // }
      />
    </Grid>
  );
};

export default Input;
