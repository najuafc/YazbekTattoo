import React, { useState } from "react";
import Botao from "./Botao";
import Campo from "./Campo";
// import CampoUpload from "./CampoUpload"

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [referencia, setReferencia] = useState(null);

return (
    <div className="Formulario">
        <h3>Agende sua tatuagem!</h3>
        <form action="">
        <Campo label="Nome: " value={nome} onChange={(e) => setNome(e.target.value)}/>
        <Campo label="Email: " value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Campo label="Telefone: " value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
        <Campo label="Tamanho da tatuagem (em cm): " value={tamanho} type="number" onChange={(e) => setTamanho(e.target.value)}/>
        <Campo label="Imagem de referência: " value={referencia} type="file" onChange={(e) => setReferencia(e.target.files[0])}/>
        <Botao label="Enviar" type="submit"/>
        </form>
    </div>
);
};

export default Formulario;

