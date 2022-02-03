import React from 'react'
import Mensagem from './Mensagem';
import '../css/Conversa.css';

function Conversa({conversa}){

    return (
        <div className='conversa'>
            {conversa.map((mensagem) => {return <Mensagem mensagem={mensagem}/>})}
        </div>
    )
}

export default Conversa;