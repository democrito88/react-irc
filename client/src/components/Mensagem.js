import React from 'react';
import '../css/Mensagem.css'

function Mensagem({mensagem}){
    return (
        <div className='mensagem'>
            <span className='autor'>{mensagem.username}</span><br />
            <span>{mensagem.message}</span>
            <span className='hora'>{mensagem.tempo}</span>
        </div>
    )
}

export default Mensagem;