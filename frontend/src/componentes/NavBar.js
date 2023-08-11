import React from "react";
import { Link } from "react-router-dom";
import { styled, ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    },
    secondary: {
      main: '#ffc107',
    },
  },
});

const NavList = styled('ul')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  listStyleType: 'none',
  padding: 40,
  width: '100%',
  justifyContent:'flex-end',
  backgroundColor: theme.palette.primary.main,
  marginTop: 0
}));
const NavItem = styled('li')({
  marginLeft: 16,
  padding:10
  
});
const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent='start'>
        <NavList>
        <NavItem><Link to="/" style={{ textDecoration: 'none', color:'black' }}>Página Inicial</Link></NavItem>
        <NavItem><Link to="/portfolio" style={{ textDecoration: 'none', color:'black' }}>Portfólio</Link></NavItem>
        <NavItem><Link to="/sobre" style={{ textDecoration: 'none', color:'black' }}>Sobre</Link></NavItem>
        <NavItem><Link to="/agendamento" style={{ textDecoration: 'none', color:'black' }}>Agendamento</Link></NavItem>
        <NavItem><Link to="/depoimentos" style={{ textDecoration: 'none', color:'black' }}>Depoimentos</Link></NavItem>
        </NavList>
      </Grid>
    </ThemeProvider>
  );
};

export default NavBar;