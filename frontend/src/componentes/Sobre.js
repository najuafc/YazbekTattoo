import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import FotoRodrigo from "./imagens/fotorodrigo.jpeg";
import { styled } from '@mui/system';
import { Grid } from '@mui/material';

const SobreImage = styled('img')({
    width: '500px', // Imagem ocupará 100% da largura do container
    maxHeight: '500px', // Altura máxima para todas as imagens
    objectFit: 'cover', // Redimensiona a imagem mantendo a pr
    borderRadius: '8px', // Borda arredondada
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
    marginLeft: '40%',
    backgroundColor: 'red',
    gap: '10px',
    marginTop: '5%',
    marginBottom: '5%'
  });

  const SobreContainer = styled(Grid)({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Duas colunas com a mesma largura
    gap: '10px', // Espaçamento entre as colunas
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0b0000',
    opacity: "0.9",
  });

  const TextoTrajetoria = styled('p')({
    alignItems:'left',
    borderRadius : '8px',
    padding: '0px',
    fontSize: '18px',
    color: '#b9b9b9',
    textAlign: 'justify'
  });
  
  const TituloTrajetoria = styled('h2')({
    fontSize: '24px',
    color: '#b9b9b9',
    fontWeight: 'bold'
  });

  const CenteredContent = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    marginRight: '20%',marginTop: '0px',
    textAlign: 'left'
});

function Sobre() {
    return (
        <div>
            <NavBar/>
            <SobreContainer>
                <SobreImage src={FotoRodrigo}/>
                <CenteredContent>
                    <TituloTrajetoria>Minha trajetória</TituloTrajetoria>
                    <TextoTrajetoria>Olá! 
                    Meu nome é Rodrigo e minha jornada é uma história de transformação e paixão. Por anos, servi como policial, dedicado a proteger nossa comunidade e manter a lei. Mas, em meio a essa trajetória, encontrei uma paixão inesperada que me levou por um novo caminho.
                    
                    Minha vida mudou quando conheci Miguel, um tatuador talentoso. Enquanto conversávamos, percebi que a tatuagem era mais do que arte na pele; era uma forma de contar histórias únicas e profundas. Essa conversa despertou algo em mim, e comecei a explorar a arte da tatuagem.
                    
                    Com o apoio e mentoramento de Miguel, dei um passo corajoso e mergulhei na jornada da tatuagem. Deixei para trás o uniforme de policial e abracei as tintas e agulhas. Cada tatuagem que faço é uma oportunidade de ajudar as pessoas a expressar suas histórias, sentimentos e personalidades.
                    
                    Hoje, tenho a alegria de administrar meu próprio estúdio de tatuagem, onde posso combinar minha dedicação anterior como policial com minha nova paixão pela arte da tatuagem. Cada tatuagem que crio é uma colaboração, uma manifestação de autoexpressão e uma lembrança duradoura das histórias das pessoas.
                    
                    Espero poder ajudar você a contar sua história única por meio da arte da tatuagem. Junte-se a mim nesta jornada criativa!</TextoTrajetoria>
                </CenteredContent>
            </SobreContainer>
            <Footer/>
        </div>
    );
};

export default Sobre; 