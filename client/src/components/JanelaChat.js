import React, { useState, useEffect } from 'react';
import Conversa from './Conversa';
import Enviador from './Enviador';
import '../css/JanelaChat.css';

function JanelaChat({socket, setUserName, username, sala}){
    var [conversa, setConversa] = useState([]);

    function updateConversa(novaMensagem){
        setConversa([...conversa, novaMensagem]);
    }

    useEffect(function(){
        /*socket.on('iniciarChat', function(data){
            setUserName(data.username);
            setConversa(() => [...conversa, data]);
        });*/
        
    
        socket.on('recebe', function(novaMensagem){
            setConversa([...conversa, novaMensagem]);
            console.log("JanelaChat - Socket de id "+socket.id)
            console.log(conversa);
        });
    }, []);

    return (
        <div className='janelaChat'>
            <Conversa conversa={conversa} />
            <Enviador socket={socket} username={username} sala={sala} updateConversa={updateConversa}/>
        </div>
    );
}

export default JanelaChat;