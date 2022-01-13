import React from 'react';
import './Mensagem.css'

function Mensagem({mensagem}){
    console.log(mensagem);
    return (
        <div className='mensagem'>
            <strong>{mensagem.autor}</strong>
            <span>{mensagem.texto}</span>
        </div>
    )
}

export default Mensagem;