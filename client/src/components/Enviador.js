import React, {useState, useEffect} from 'react'
import '../css/Enviador.css'
import { Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Botao from './Botao';
import io from 'socket.io-client';

const URL_CONEXAO = "http://192.168.1.11:3001";
var socket = io(URL_CONEXAO,{
  withCredentials: true,
   extraHeaders: {    
     "Access-Control-Allow-Origin": "*"  
    }
});

function Enviador({handleEnvioMensagens, username}){
    const [inputData, setInputData] = useState('');

    const handleInputChange = function(e){
        setInputData(e.target.value);
    };

    function enviaMensagem(){
        handleEnvioMensagens(inputData)
    }

    useEffect(function(){
        socket = io(URL_CONEXAO,{
            withCredentials: true,
             extraHeaders: {    
               "Access-Control-Allow-Origin": "*"  
              }
          });
    });

    function handleEnvioMensagens(inputData){
        console.log(inputData);
        socket.emit('envioMensagem', {username: username, message: inputData});
    }

    return (
        <Form className='enviador'>
            <FormGroup>
                <InputGroup className="mb-3">
                    <FormControl type="text" onChange={handleInputChange} value={inputData} />
                    <Botao variant="outline-secondary" onClick={enviaMensagem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                    </Botao>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default Enviador;