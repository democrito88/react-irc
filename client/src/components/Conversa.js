import React, {useState, useEffect} from 'react'
import Mensagem from './Mensagem';
import '../css/Conversa.css';

function Conversa({socket, setUserName}){

    var [conversa, setConversa] = useState([]);

    useEffect(function(){
        /*socket.on('iniciarChat', function(data){
            setUserName(data.username);
            setConversa(() => [...conversa, data]);
        });*/
        function updateConversa(novaMensagem){
            setConversa((conversa) => [...conversa, novaMensagem]);
        }
    
        socket.on('recebe', function(novaMensagem){
            updateConversa(novaMensagem)
            console.log(conversa);
        });
    }, [socket, conversa]);

    return (
        <div className='conversa'>
            {conversa.map((mensagem, index) => {return <Mensagem mensagem={mensagem}/>})}
        </div>
    )
}

export default Conversa;