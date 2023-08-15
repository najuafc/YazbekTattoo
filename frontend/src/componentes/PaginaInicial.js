import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'; 
import Carrossel from './Carrossel';
import Botao from "./Botao";

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
                <div id='botao-sobre'>
                    <Botao label="Saiba mais" onClick='/sobre'/>
                </div>
            </div>
            <div id='footer'>
                <Footer/>
            </div>
        </div>
    );
};

export default PaginaInicial;
