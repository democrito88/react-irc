import React from 'react'
import Mensagem from './Mensagem';
import '../css/Conversa.css';

function Conversa({mensagens}){

    return (
        <div className='conversa'>
            {mensagens.map((mensagem, index) => (<Mensagem key={index} mensagem={mensagem}/>))}
        </div>
    )
}

export default Conversa;