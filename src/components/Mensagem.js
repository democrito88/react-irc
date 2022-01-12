import React from 'react'

function Mensagem({mensagem}){
    console.log(mensagem);
    return (
        <p><strong>{mensagem.autor}</strong><span>{mensagem.texto}</span></p>
    )
}

export default Mensagem;