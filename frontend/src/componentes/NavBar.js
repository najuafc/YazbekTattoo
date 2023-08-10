import React from "react";
import Box from '@mui/material/Box';

const NavBar = () => {
  return (
    <Box display="flex" flexDirection="row">
      <nav>
        <ul style={{ listStyleType: "none", display: "flex", flexDirection: "row", padding: 0 }}>
          <li style={{ marginRight: "10px" }}>Página Inicial
          <Link> </Link></li>
          <li style={{ marginRight: "10px" }}>Portfólio</li>
          <li style={{ marginRight: "10px" }}>Sobre</li>
          <li style={{ marginRight: "10px" }}>Agendamento</li>
          <li>Depoimentos</li>
        </ul>
      </nav>
    </Box>
  );
};

export default NavBar;