import React, { useState } from 'react';
import Conversa from './Conversa';
import Enviador from './Enviador';
import '../css/JanelaChat.css';

function JanelaChat(){
    const [mensagens, setMessage] = useState([
        {
            id: Math.random(),
            autor: "Eu",
            texto: "Testando"
        },
        {
            id: Math.random(),
            autor: "Tu",
            texto: "Testando"
        },
        {
            id: Math.random(),
            autor: "Eu",
            texto: "Teste"
        }
    ]);

    function handleEnvioMensagens(texto){
        const novaMensagem = [...mensagens, {
            autor: "Eu",
            texto: texto
        }]

        setMessage(novaMensagem);
    }

    return (
        <div className='janelaChat'>
            <Conversa mensagens={mensagens}/>
            <Enviador handleEnvioMensagens={handleEnvioMensagens}/>
        </div>
    );
}

export default JanelaChat;