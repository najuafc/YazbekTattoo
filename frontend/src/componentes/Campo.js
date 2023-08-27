import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Campo = ({name, label, value, onChange, type}) => {
  if (type === "file") {
    return (
      <Box margin="10px">
        <TextField
          name={name}
          label = {label}
          onChange={onChange}
          type='file'
          InputLabelProps={{ shrink: true }}
          required
        />
      </Box>
    );
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" margin="10px">
      <TextField
        name={name}
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

