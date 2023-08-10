import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from "./componentes/PaginaInicial";
import Portfolio from "./componentes/Portfolio";
import Sobre from "./componentes/Sobre";
import Depoimentos from "./componentes/Depoimentos";
import Agendamento from "./componentes/Agendamento";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PaginaInicial/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/agendamento" element={<Agendamento/>}/>
        <Route path="/depoimentos" element={<Depoimentos/>}/>
      </Routes>
   </BrowserRouter>
  );
};

export default App;