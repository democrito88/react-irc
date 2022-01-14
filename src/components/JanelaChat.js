import React, { useState } from 'react';
import Conversa from './Conversa';
import Enviador from './Enviador';
import { Stack } from 'react-bootstrap';

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
        <Stack gap={3}>
            <Conversa mensagens={mensagens}/>
            <Enviador handleEnvioMensagens={handleEnvioMensagens}/>
        </Stack>
    );
}

export default JanelaChat;