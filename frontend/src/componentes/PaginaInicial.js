import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'; 
import Carrossel from './Carrossel';
import Botao from "./Botao";
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme'; // Importe o tema global

function PaginaInicial() {
    return (
        <div>
            <div id='header'>
                <NavBar/>
                <Carrossel/>
            </div>
            <div id='sobre' style={{ marginTop: '400px', marginLeft: '10px'}}>
                <div>
                    <h1>Sobre Nós:</h1>
                    <p>Na Yazbek Tattoo, acreditamos que a tatuagem é uma forma de arte que permite a você contar sua história única através da pele.</p>
                    <p>Nossos artistas talentosos combinam criatividade e habilidade para criar tatuagens que refletem sua personalidade e paixões.</p> 
                    <p>Com anos de experiência e um compromisso inabalável com a qualidade, estamos dedicados a transformar seus sonhos em obras de arte duradouras.</p>
                </div>
                <Link to='/sobre'>
                    <ThemeProvider theme={theme}>
                        <Botao label="Saiba mais" style={{backgroundColor: 'blue', color: 'white'}}/>
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
