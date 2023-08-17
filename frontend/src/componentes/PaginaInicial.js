import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'; 
import Carrossel from './Carrossel';
import Botao from "./Botao";
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import styled from '@emotion/styled';

const ListaStyled = styled('li')({
    listStyleType: 'none',
    color: '#b9b9b9',
    padding: '2px'
});

function PaginaInicial() {
    return (
        <div>
            <div id='header-container'>
                <NavBar/>
                <Carrossel/>
            </div>
            <div id='sobre-container' style={{ marginTop: '400px', padding: '20px', backgroundColor: '#0b0000', opacity: 0.9, textAlign: 'center'}}>
                <div id='sobre-texto' style={{ marginLeft: '10px', color: '#b9b9b9'}}> 
                    <h1>Sobre Nós:</h1>
                    <p>Na Yazbek Tattoo, acreditamos que a tatuagem é uma forma de arte que permite a você contar sua história única através da pele.</p>
                    <p>Nossos artistas talentosos combinam criatividade e habilidade para criar tatuagens que refletem sua personalidade e paixões.</p> 
                    <p>Com anos de experiência e um compromisso inabalável com a qualidade, estamos dedicados a transformar seus sonhos em obras de arte duradouras.</p>
                </div>
                <Link to='/sobre'>
                    <ThemeProvider theme={theme}>
                        <Botao label="Saiba mais"/>
                    </ThemeProvider>
                </Link>
            </div>
            <div className='portfolio-container' style={{ backgroundColor: '#a51d1d', opacity: 0.9, padding: '15px', textAlign: 'center'}}>
                <div className='portfolio-texto'>
                </div>
                <div className='portfolio-lista'>
                    <h1 style={{ color: '#b9b9b9' }}>Nossos estilos e técnicas</h1>
                        <ul>
                            <ListaStyled>
                                <li style={{ color: '#b9b9b9', padding: '2px'}}><strong>Tradicionais:</strong> linhas grossas, cores vivas e design clássico</li>
                                <li style={{ color: '#b9b9b9', padding: '2px'}}><strong>Minimalistas:</strong> linhas finas, formas geométricas simples e poucos detalhes</li>
                                <li style={{ color: '#b9b9b9', padding: '2px'}}><strong>Geométricas:</strong> baseadas em formas geométricas como triângulos, círculos e linhas retas, resultando em designs complexos e simétricos</li>
                                <li style={{ color: '#b9b9b9', padding: '2px'}}><strong>Pontilhismo:</strong> criadas por meio de pontos individuais que formam um design maior</li>
                                <li style={{ color: '#b9b9b9', padding: '2px'}}><strong>Blackwork:</strong> geralmente feitas em tinta preta sólida, essas tatuagens usam contrastes fortes e padrões intrincados.</li>
                                <li style={{ color: '#b9b9b9', padding: '2px'}}><strong>Escrita: </strong>nomes, frases, citações ou palavras significativas, frequentemente usando diferentes estilos de fonte</li>
                                <li style={{ color: '#b9b9b9', padding: '2px'}}><strong>Natureza: </strong>inspiradas em elementos naturais como flores, folhas, árvores, animais e paisagens</li>
                            </ListaStyled>
                        </ul>
                        <Link to='/agendamento'>
                            <ThemeProvider theme={theme}>
                                <Botao label="Agende sua tattoo agora!"/>
                            </ThemeProvider>
                        </Link>
                </div>
            </div>
            <div id='footer'>
                <Footer/>
            </div>
        </div>
    );
};

export default PaginaInicial;
