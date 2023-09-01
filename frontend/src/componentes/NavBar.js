import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled, ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import Logo from "./imagens/logo.png"
import "../navbar.css"

const theme = createTheme({
  palette: {
    primary: {
      main: '#a51d1d'
    }
  },
});

const ImagemLogo = styled('img') ({
  marginLeft: '30px'
});

const NavContainer = styled('div')({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center', // Centralize verticalmente os itens
  padding: '10px 0px', // Adicione um espaçamento interno
  backgroundColor: theme.palette.primary.main,
  opacity: 0.9
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

  // controle de estado de exibição
  const [ showMenu, setShowMenu ] = useState(false)

  // função que troca o estado
  const toggleMenu = () => {
    setShowMenu(!showMenu)  
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent='space-between'>
        <NavContainer>
          <ImagemLogo src={Logo}/>
          <div className={`${'menuSanduiche'} ${ showMenu ? 'show' : '' }`}> 
            <NavList>
            <NavItem><Link to="/" style={{ textDecoration: 'none', color:'black' }}>Página Inicial</Link></NavItem>
            <NavItem><Link to="/portfolio" style={{ textDecoration: 'none', color:'black' }}>Portfólio</Link></NavItem>
            <NavItem><Link to="/sobre" style={{ textDecoration: 'none', color:'black' }}>Sobre</Link></NavItem>
            <NavItem><Link to="/agendamento" style={{ textDecoration: 'none', color:'black' }}>Agendamento</Link></NavItem>
            <NavItem><Link to="/depoimentos" style={{ textDecoration: 'none', color:'black' }}>Depoimentos</Link></NavItem>
            </NavList>
          </div>
        </NavContainer>
        <div className='menuBotao' onClick={toggleMenu}>
            <span className='linha'></span>
            <span className='linha'></span>
            <span className='linha'></span>
        </div>
      </Grid>
    </ThemeProvider>
  );
};

export default NavBar;

