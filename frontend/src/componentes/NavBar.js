import React from "react";
import Box from '@mui/material/Box';

const NavBar = () => {
  return (
    <Box display="flex" flexDirection="row">
      <nav>
        <ul style={{ listStyleType: "none", display: "flex", flexDirection: "row", padding: 0 }}>
          <li style={{ marginRight: "10px" }}>
            <a href="/">Página Inicial</a>
          </li>
          <li style={{ marginRight: "10px" }}>
            <a href="/portfolio">Portfólio</a>
          </li>
          <li style={{ marginRight: "10px" }}>
            <a href="/sobre">Sobre</a>
          </li>
          <li style={{ marginRight: "10px" }}>
              <a href="/agendamento">Agendamento</a>
          </li>
          <li>
              <a href="/depoimentos">Depoimentos</a>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

export default NavBar;