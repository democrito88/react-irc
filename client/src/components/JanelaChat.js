import React, { useState } from 'react';
import Conversa from './Conversa';
import Enviador from './Enviador';
import '../css/JanelaChat.css';

function JanelaChat({conversa, username, handleEnvioMensagens}){

    return (
        <div className='janelaChat'>
            <Conversa mensagens={conversa}/>
            <Enviador handleEnvioMensagens={handleEnvioMensagens} username={username}/>
        </div>
    );
}

export default JanelaChat;