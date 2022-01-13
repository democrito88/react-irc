import React from 'react';
import Conversa from './Conversa';
import Enviador from './Enviador';
import './JanelaChat.css'

function JanelaChat(){
    return (
        <div className='janelaChat'>
            <Conversa/>
            <Enviador/>
        </div>
    );
}

export default JanelaChat;