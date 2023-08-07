import React from 'react';
import Button from '@mui/material/Button';

const Botao = ({ label, onClick }) => {
    return(
        <Button onClick={onClick} variant="contained" color="primary" type='submit'>
            {label}
        </Button>
    );
};

export default Botao;
