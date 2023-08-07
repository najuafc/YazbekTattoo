import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Campo = ({ label, value, onChange, type = "text"}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" margin="10px">
      <TextField
        label = {label}
        value = {value}
        onChange = {onChange}
        type = {type}
        required
        variant='outlined'
        InputLabelProps={{ shrink: true }}
      />
    </Box>
  );
};

export default Campo; 