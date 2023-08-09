// import React, { useState } from "react";
// import Botao from "./Botao";
// import Campo from "./Campo";
// // import CampoUpload from "./CampoUpload"

// const Formulario = () => {
//     const [nome, setNome] = useState('');
//     const [email, setEmail] = useState('');
//     const [telefone, setTelefone] = useState('');
//     const [tamanho, setTamanho] = useState('');
//     const [referencia, setReferencia] = useState(null);

// return (
//     <div className="Formulario">
//         <h3>Agende sua tatuagem!</h3>
//         <form onSubmit={handleSubmit}>
//         <Campo label="Nome: " value={nome} onChange={(e) => setNome(e.target.value)}/>
//         <Campo label="Email: " value={email} onChange={(e) => setEmail(e.target.value)}/>
//         <Campo label="Telefone: " value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
//         <Campo label="Tamanho da tatuagem (em cm): " value={tamanho} type="number" onChange={(e) => setTamanho(e.target.value)}/>
//         <Campo label="Imagem de referência: " value={referencia} type="file" onChange={(e) => setReferencia(e.target.files[0])}/>
//         <Botao label="Enviar" type="submit"/>
//         </form>
//     </div>
// );
// };

// export default Formulario;

import React, { useState } from 'react';
import Botao from "./Botao";
import Campo from "./Campo";
// import CampoUpload from "./CampoUpload"

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [referencia, setReferencia] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... lógica de envio para o backend ...
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('telefone', telefone);
    formData.append('tamanho', tamanho);
    formData.append('referencia', referencia);

    try {
        const response = await fetch('/api/appointments', {
          method: 'POST',
          body: formData,
        });
      
        if (response.ok) {
          console.log('SUCESSOOOOOOOOOOOOOOO')
        }
      } catch (error) {
            console.error('Erro ao enviar dados:', error);
            res.status(500).send('Erro ao enviar dados.');
      }
      
  };

  return (
    <div className="Formulario">
        <h3>Agende sua tatuagem!</h3>
            <form onSubmit={handleSubmit}>
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

