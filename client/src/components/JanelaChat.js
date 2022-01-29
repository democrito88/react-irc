import React from 'react';
import Conversa from './Conversa';
import Enviador from './Enviador';
import '../css/JanelaChat.css';

function JanelaChat({socket, setUserName, username, sala}){

    return (
        <div className='janelaChat'>
            <Conversa socket={socket} setUserName={setUserName} />
            <Enviador socket={socket} username={username} sala={sala}/>
        </div>
    );
}

export default JanelaChat;