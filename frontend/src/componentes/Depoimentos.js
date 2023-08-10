import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';


function Sobre() {
    return (
        <div>
            <NavBar/>
            <div>
                <h4>Marta Batista</h4>
                <p>"Minha experiência na Yazbek Tattoo foi incrível! Ele captou exatamente o que eu queria e transformou em uma tatuagem linda e cheia de significado. Recomendo!"</p>
            </div>

            <div>
                <h4>Arthur Rodrigues</h4>
                <p>"Cara, tô só o amor pela minha nova tatuagem da Yazbek Tattoo! O tatuador mandou bem demais e eu tô me achando com esse desenho maneiro na pele."</p>
            </div>
            <div>
                <h4>Lucas Pinto</h4>
                <p>"Cara, eu fiz minha tatuagem na Yazbek Tattoo e tô impressionado. O tatuador é talentoso demais e ainda me deu um monte de dicas pra cuidar dela. Agora tô viciado em tatuagens!"</p>
            </div>
            <Footer/>
        </div>
    );
};

export default Sobre;