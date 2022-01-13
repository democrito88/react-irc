import React, {useState} from 'react'
import Mensagens from './Mensagens';
import './Conversa.css';

function Conversa(){
    const [mensagens, setMessage] = useState([
        {
            autor: "Eu",
            texto: "Testando"
        },
        {
            autor: "Tu",
            texto: "Testando"
        },
        {
            autor: "Eu",
            texto: "Teste"
        }
    ]);

    return (
        <div className='conversa'>
            <Mensagens mensagens={mensagens}/>
        </div>
    )
}

export default Conversa;