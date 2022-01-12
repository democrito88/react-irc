import React from 'react'
import Mensagem from './Mensagem';

function Mensagens({mensagens}){
    return (
        <>
            {mensagens.map((mensagem) => (<Mensagem mensagem={mensagem}/>))}
        </>
    )
}

export default Mensagens;