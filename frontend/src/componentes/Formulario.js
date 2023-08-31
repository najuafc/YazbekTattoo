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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('tamanho', tamanho);
        formData.append('referencia', referencia);
    };
    

const FormularioContainer = {
        padding: '10px',
        marginBottom: '5px',
        borderRadius: '20px',
        border: 'none',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    };

const campoStyle = {
        color: 'black', 
        marginBottom: '10px',
        borderRadius: '5px',
        border: 'none',
        width: '250px',  // Ajuste o tamanho desejado
    };

const ContainerCentralizado = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        gap: '150px',
    };

const TextoPaginaAgendamento = styled('h2')({
        display: 'flex', 
        marginLeft: '5%',
        borderRadius : '8px',
        fontSize: '28px',
        color: '#a51d1d',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row'
        
});

return (
        <div style={ContainerCentralizado}> 
            <div>
                <div>
                    <TextoPaginaAgendamento>
                            <h4>Agende sua tatuagem conosco!<br></br>
                                Preencha o formulário abaixo com as suas informações <br></br> e em breve entraremos em contato para agendar sua tattoo. </h4>
                    </TextoPaginaAgendamento>
                    </div>
                        <div style={FormularioContainer}>
                            <form onSubmit={handleSubmit} action="http://localhost:4000/formulario" method="post" encType="multipart/form-data">
                                    <div style={campoStyle}> 
                                        <Campo label="Nome: " value={nome} onChange={(e) => setNome(e.target.value)} name='nome'/>
                                        <Campo label="Email: " value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email'/>
                                        <Campo label="Telefone: " value={telefone} onChange={(e) => setTelefone(e.target.value)} type='tel'name='telefone'/>
                                        <Campo label="Tamanho da tatuagem (em cm): " value={tamanho} onChange={(e) => setTamanho(e.target.value)} type="number" name='tamanho'/>
                                        <Campo label="Imagem de referência: " value={referencia} onChange={(e) => setReferencia(e.target.value)} type="file" name="imagem_rota"/>
                                    </div>
                                    <ThemeProvider theme={theme}>
                                        <Botao label="Enviar" type="submit"/>
                                    </ThemeProvider>
                            </form>
                        </div>
                </div>
        </div>
);
};

export default Formulario;

