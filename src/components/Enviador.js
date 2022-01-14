import React, {useState} from 'react'
import '../css/Enviador.css'
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import Botao from './Botao';

function Enviador({handleEnvioMensagens}){
    const [inputData, setInputData] = useState('');

    const handleInputChange = function(e){
        setInputData(e.target.value);
    };

    function enviaMensagem(){
        handleEnvioMensagens(inputData)
    }

    return (
        <Form className='enviador'>
            <FormGroup>
                <FormControl type="text" onChange={handleInputChange} value={inputData} />
                <Botao onClick={enviaMensagem}>Enviar</Botao>
            </FormGroup>
        </Form>
    )
}

export default Enviador;