import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styled from '@emotion/styled';

const DepoimentosContainer = styled('div') ({
    backgroundColor: '#0b0000',
    opacity: 0.9,
    color: '#b9b9b9',
    padding: '40px',
    maxWidth: '100%',
    height: 'auto',
})

const Depoimento = styled('div') ({
    display: 'flex',
    backgroundColor: '#a51d1d',
    borderRadius: '10px', 
    padding: '2%',
    flexDirection: 'column',
    margin: '7%',
    marginTop: '2%',
    marginBottom: '4%',
    marginRight: '10%',
    marginLeft: '10%'
});

const Paragrafo = styled.p({
    fontSize: '18px',
});

const Titulo = styled.h3({
    fontWeight: 'bold',
    marginBottom: 'px'
});

function Sobre() {
    return (
        <div>
            <NavBar/>
            <DepoimentosContainer>
                <Depoimento>
                    <div>
                        <Titulo>Marta Batista</Titulo>
                        <Paragrafo>"Minha experiência na Yazbek Tattoo foi incrível! Ele captou exatamente o que eu queria e transformou em uma tatuagem linda e cheia de significado. Recomendo!"</Paragrafo>
                    </div>
                </Depoimento>
                <Depoimento>
                    <div>
                        <Titulo>Arthur Rodrigues</Titulo>
                        <Paragrafo>"Cara, tô só o amor pela minha nova tatuagem da Yazbek Tattoo! O tatuador mandou bem demais e eu tô me achando com esse desenho maneiro na pele."</Paragrafo>
                    </div>
                </Depoimento>
                <Depoimento>
                    <div>
                        <Titulo>Lucas Pinto</Titulo>
                        <Paragrafo>"Eu fiz minha tatuagem na Yazbek Tattoo e tô impressionado. O tatuador é talentoso demais e ainda me deu um monte de dicas pra cuidar dela. Agora tô viciado em tatuagens!"</Paragrafo>
                    </div>
                </Depoimento>
                <Depoimento>
                    <div>
                        <Titulo>João Lucas</Titulo>
                        <Paragrafo>Eu estava um pouco nervoso antes da minha primeira tatuagem, mas a equipe da Yazbek Tattoo me fez sentir à vontade desde o momento em que entrei. Eles são incrivelmente talentosos e profissionais. Minha tatuagem ficou melhor do que eu imaginava!"</Paragrafo>
                    </div>
                </Depoimento>
                <Depoimento>
                    <div>
                        <Titulo>Letícia Poeta</Titulo>
                        <Paragrafo>"Eu sou uma cliente fiel da Yazbek Tattoo porque eles sempre entregam um trabalho excepcional. Cada tatuagem que fiz com eles é única e bem feita. O estúdio é limpo, e a equipe é super amigável. Recomendo de olhos fechados!"</Paragrafo>
                    </div>
                </Depoimento>
            </DepoimentosContainer>
            <Footer/>
        </div>
    );
};

export default Sobre;