import React, { useState } from "react";
import Botao from "./Botao";
import Campo from "./Campo";
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import styled from "@emotion/styled";

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [referencia, setReferencia] = useState(null);

const FormularioContainer = styled.form({
        padding: '50px',
        marginBottom: '5px',
        borderRadius: '20px',
        border: 'none',
        width: '100%',
        backgroundColor: 'white',
        marginLeft: 0,
        marginRight: "50px"
        
    });

const campoStyle = {
        color: 'black', 
        marginBottom: '10px',
        borderRadius: '5px',
        border: 'none',
        width: '100%'
    };

const ContainerCentralizado = styled.div({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        gap: '150px'
    });

const TextoPaginaAgendamento = styled('h2')({
        display: 'flex', 
        marginLeft: '5%',
        borderRadius : '8px',
        fontSize: '28px',
        color: '#a51d1d',
        textAlign: 'justify',
        alignItems: 'left',
        textAlign: 'justify'
        
});

return (
    <ContainerCentralizado>
        <div>
            <TextoPaginaAgendamento>Agende sua tatuagem conosco!<br></br> Preencha o formulário ao lado com suas informações<br></br>
                    e em breve entraremos em contato para agendar o melhor horário para você.</TextoPaginaAgendamento>
        </div>
            <form>
                <FormularioContainer>
                    <Campo label="Nome: " value={nome} onChange={(e) => setNome(e.target.value)} style={campoStyle}/>
                    <Campo label="Email: " value={email} onChange={(e) => setEmail(e.target.value)} style={campoStyle}/>
                    <Campo label="Telefone: " value={telefone} onChange={(e) => setTelefone(e.target.value)} style={campoStyle}/>
                    <Campo label="Tamanho da tatuagem (em cm): " value={tamanho} type="number" onChange={(e) => setTamanho(e.target.value)} style={campoStyle}/>
                    <Campo label="Imagem de referência: " value={referencia} type="file" onChange={(e) => setReferencia(e.target.files[0])} style={campoStyle}/>
                    <ThemeProvider theme={theme}>
                    <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <Botao label="Enviar" type="submit"/>
                    </div>
                </ThemeProvider>
                </FormularioContainer>
            </form>
    </ContainerCentralizado>
);
};

export default Formulario;


