import React from "react";
import { Link } from "react-router-dom";
import { styled, ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import Logo from "./imagens/logo.png"

const ImagemLogo = styled('img') ({
  marginLeft: '30px'
});

const NavContainer = styled('div')({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center', // Centralize verticalmente os itens
  padding: '10px 20px', // Adicione um espaçamento interno
  backgroundColor: '#d32f2f', // Cor de fundo da barra de navegação
});


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
      <Grid container justifyContent='space-between'>
        <NavContainer>
          <ImagemLogo src={Logo}/>
          <NavList>
          <NavItem><Link to="/" style={{ textDecoration: 'none', color:'black' }}>Página Inicial</Link></NavItem>
          <NavItem><Link to="/portfolio" style={{ textDecoration: 'none', color:'black' }}>Portfólio</Link></NavItem>
          <NavItem><Link to="/sobre" style={{ textDecoration: 'none', color:'black' }}>Sobre</Link></NavItem>
          <NavItem><Link to="/agendamento" style={{ textDecoration: 'none', color:'black' }}>Agendamento</Link></NavItem>
          <NavItem><Link to="/depoimentos" style={{ textDecoration: 'none', color:'black' }}>Depoimentos</Link></NavItem>
          </NavList>
        </NavContainer>
      </Grid>
    </ThemeProvider>
  );
};

export default NavBar;