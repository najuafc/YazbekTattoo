import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

import Anagrama1 from "./imagens/aj.jpeg";
import Anagrama2 from "./imagens/tatuagem.jpeg";
import Anagrama3 from "./imagens/yazbek.jpeg";
import Anagrama4 from "./imagens/yazbek2.jpeg";

const PortfolioContainer = styled(Grid)({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)', // Duas colunas
  gap: '16px', // Espaçamento entre as fotos
  backgroundColor: '#0b0000',
  opacity: 0.9,
  padding: '40px'
});

const PortfolioImage = styled('img')({
    width: '100%', // Imagem ocupará 100% da largura do container
    maxHeight: '300px', // Altura máxima para todas as imagens
    objectFit: 'cover', 
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  });


const Portfolio = () => {
  return (
    <div>
        <NavBar/>
        <PortfolioContainer>
          <PortfolioImage src={Anagrama1}/>
          <PortfolioImage src={Anagrama2}/>
          <PortfolioImage src={Anagrama3}/>
          <PortfolioImage src={Anagrama4}/>
        </PortfolioContainer>
        <Footer/>
    </div>
  );
};

export default Portfolio;
