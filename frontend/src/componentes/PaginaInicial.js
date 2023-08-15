import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'; 
import Carrossel from './Carrossel';
import Botao from "./Botao";
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';

function PaginaInicial() {
    return (
        <div>
            <div id='header-container'>
                <NavBar/>
                <Carrossel/>
            </div>
            <div id='sobre-container' style={{ marginTop: '400px', backgroundColor: '#0b0000', padding: '20px', opacity: 0.9, textAlign: 'center'}}>
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
            <div id='footer'>
                <Footer/>
            </div>
        </div>
    );
};

export default PaginaInicial;
