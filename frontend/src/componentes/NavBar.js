import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Página Inicial</a>
        </li>
        <li>
          <a href="/portfolio">Portfólio</a>
        </li>
        <li>
          <a href="/sobre">Sobre</a>
        </li>
        <li>
            <a href="/agendamento">Agendamento</a>
        </li>
        <li>
            <a href="/depoimentos">Depoimentos</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;