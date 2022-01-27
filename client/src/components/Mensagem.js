import React from 'react';
import '../css/Mensagem.css'
import Badge from 'react-bootstrap/Badge';

function Mensagem({key, mensagem}){
    return (
        <div key={key} className='mensagem'>
            <Badge key={key} variant="primary">{mensagem.autor}</Badge>
            <span key={key}>{mensagem.message}</span>
        </div>
    )
}

export default Mensagem;