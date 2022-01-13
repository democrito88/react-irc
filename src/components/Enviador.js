import React from 'react'
import './Enviador.css'

function Enviador(){
    return (
        <div className='enviador'>
            <input type="text" onClick="enviaMensagem()" /><button>Enviar</button>
        </div>
    )
}

export default Enviador;