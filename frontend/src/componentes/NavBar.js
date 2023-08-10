import React from "react";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box display="flex" flexDirection="row">
      <nav>
        <ul style={{ listStyleType: "none", display: "flex", flexDirection: "row", padding: 0 }}>
          <li style={{ marginRight: "10px" }}><Link to="/">Página Inicial</Link></li>
          <li style={{ marginRight: "10px" }}><Link to="/portfolio">Portfólio</Link></li>
          <li style={{ marginRight: "10px" }}><Link to="/sobre">Sobre</Link></li>
          <li style={{ marginRight: "10px" }}><Link to="/agendamento">Agendamento</Link></li>
          <li><Link to="/Depoimentos">Depoimentos</Link></li>
        </ul>
      </nav>
    </Box>
  );
};

export default NavBar;