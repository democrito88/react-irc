import React, { useState } from 'react';
import Conversa from './Conversa';
import Enviador from './Enviador';
import '../css/JanelaChat.css';

function JanelaChat({username, enviarMensagem, handleEnvioMensagens}){
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

    function atualizaMensagens(texto){
        const novaMensagem = [...mensagens, {
            autor: username,
            texto: texto
        }]

        setMessage(novaMensagem);
        enviarMensagem(enviarMensagem);
    }

    return (
        <div className='janelaChat'>
            <Conversa mensagens={mensagens} atualizaMensagens={atualizaMensagens}/>
            <Enviador handleEnvioMensagens={handleEnvioMensagens} username={username}/>
        </div>
    );
}

export default JanelaChat;