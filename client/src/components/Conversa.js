import React, { useState, useEffect } from 'react'
import Mensagens from './Mensagens';
import '../css/Conversa.css';
import io from 'socket.io-client';

const URL_CONEXAO = "http://192.168.1.11:3001";
var socket = io(URL_CONEXAO,{
  withCredentials: true,
   extraHeaders: {    
     "Access-Control-Allow-Origin": "*"  
    }
});

function Conversa({mensagens}){
    var [conversa, setConversa] = useState(mensagens);

    function setConversa(mensagem){
        conversa = [...conversa, mensagem];
    }

    useEffect(function(){
        socket = io(URL_CONEXAO,{
            withCredentials: true,
             extraHeaders: {    
               "Access-Control-Allow-Origin": "*"  
              }
          });
    });

    socket.on("recebeMensagem", function(novaMensagem){
        console.log("Recebi a mensagem!");
        setConversa(novaMensagem);
    });

    return (
        <div className='conversa'>
            <Mensagens mensagens={mensagens}/>
        </div>
    )
}

export default Conversa;