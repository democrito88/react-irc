import React from 'react';
import './Mensagem.css'
import Badge from 'react-bootstrap/Badge';

function Mensagem({mensagem}){
    console.log(mensagem);
    return (
        <div className='mensagem'>
            <Badge variant="primary">{mensagem.autor}</Badge>
            <span>{mensagem.texto}</span>
        </div>
    )
}

export default Mensagem;