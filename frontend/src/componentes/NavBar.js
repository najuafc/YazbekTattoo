import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const NavList = styled('ul')({
  display: 'flex',
  flexDirection: 'row',
  listStyleType: 'none',
  padding: 40,
  width: '100%',
  justifyContent:'flex-end',
  backgroundColor: 'lightblue',
  marginTop: 0
});
const NavItem = styled('li')({
  marginLeft: 16,
  padding:10
  
});
const NavBar = () => {
  return (
      <Grid container justifyContent='start'>
        <NavList>
        <NavItem><Link to="/" style={{ textDecoration: 'none', color:'black' }}>Página Inicial</Link></NavItem>
        <NavItem><Link to="/portfolio" style={{ textDecoration: 'none', color:'black' }}>Portfólio</Link></NavItem>
        <NavItem><Link to="/sobre" style={{ textDecoration: 'none', color:'black' }}>Sobre</Link></NavItem>
        <NavItem><Link to="/agendamento" style={{ textDecoration: 'none', color:'black' }}>Agendamento</Link></NavItem>
        <NavItem><Link to="/depoimentos" style={{ textDecoration: 'none', color:'black' }}>Depoimentos</Link></NavItem>
        </NavList>
      </Grid>
  );
};

export default NavBar;