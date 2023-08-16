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
        padding: '20px',
        marginBottom: '5px',
        borderRadius: '5px',
        border: 'none',
        width: '100%'
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b0000',
        borderRadius: '10px'
    });

return (
    <ContainerCentralizado>
        <div className="Formulario">
            <h3 style={{ color: '#a51d1d' }}>Agende sua tatuagem!</h3>
            <form>
                <FormularioContainer>
                    <Campo label="Nome: " value={nome} onChange={(e) => setNome(e.target.value)} style={campoStyle}/>
                    <Campo label="Email: " value={email} onChange={(e) => setEmail(e.target.value)} style={campoStyle}/>
                    <Campo label="Telefone: " value={telefone} onChange={(e) => setTelefone(e.target.value)} style={campoStyle}/>
                    <Campo label="Tamanho da tatuagem (em cm): " value={tamanho} type="number" onChange={(e) => setTamanho(e.target.value)} style={campoStyle}/>
                    <Campo label="Imagem de referência: " value={referencia} type="file" onChange={(e) => setReferencia(e.target.files[0])} style={campoStyle}/>
                </FormularioContainer>
                <ThemeProvider theme={theme}>
                    <Botao label="Enviar" type="submit"/>
                </ThemeProvider>
            </form>
        </div>
    </ContainerCentralizado>
);
};

export default Formulario;


