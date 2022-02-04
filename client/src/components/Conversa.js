import React from 'react'
import Mensagem from './Mensagem';
import '../css/Conversa.css';

function Conversa({usuario, conversa}){

    return (
        <div className='conversa'>
            {conversa.map((mensagem) => <Mensagem key={mensagem.id} usuario={usuario} mensagem={mensagem}/>)}
        </div>
    )
}

export default Conversa;