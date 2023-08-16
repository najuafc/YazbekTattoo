import * as React from 'react';
import Formulario from "./Formulario";
import NavBar from './NavBar';
import Footer from './Footer';
import styled from '@emotion/styled';

const AgendamentoContainer = styled('form') ({
    backgroundColor: '#0b0000',
    opacity: 0.9,
    padding: '40px'
})

function Agendamento() {
    return (
        <div>
            <NavBar/>
            <AgendamentoContainer>
              <Formulario/>
            </AgendamentoContainer>
            <Footer/>
        </div>
    );
};

export default Agendamento;