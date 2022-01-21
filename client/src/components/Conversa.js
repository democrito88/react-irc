import React from 'react'
import Mensagens from './Mensagens';
import '../css/Conversa.css';

function Conversa({mensagens}){
    return (
        <div className='conversa'>
            <Mensagens mensagens={mensagens}/>
        </div>
    )
}

export default Conversa;