import React, {useState} from 'react'
import '../css/Enviador.css'
import { FormControl, InputGroup } from 'react-bootstrap';
//import Botao from './Botao';

function Enviador({socket, username, sala,updateConversa }){
    const [inputData, setInputData] = useState('');

    const handleInputChange = function(e){
        setInputData(e.target.value);
    };

    const handleEnvioMensagens = (inputData) => {
        if(inputData !== ""){
            const novaMensagem = {
                id: (new Date()).getTime(),
                username: username, 
                message: inputData,
                sala: sala,
                tempo: (new Date(Date.now()).getHours()) + ":" + (new Date(Date.now()).getMinutes())
            };
            console.log("Enviador - socket com a id: "+socket.id)
            socket.emit('envio', novaMensagem);

            updateConversa(novaMensagem);
        }
    }

    /*function submeter(e){
        e.preventDefault();
        handleEnvioMensagens(inputData);
        setInputData('');
    }*/

    function ehEnter(e){
        if(e.key === 'Enter'){
            handleEnvioMensagens(inputData);
            setInputData('');
        }
    }

    return (
        <InputGroup className="enviador">
            <FormControl type="text" onChange={handleInputChange} value={inputData} onKeyPress={ehEnter} />
            {/*<Botao variant="outline-secondary" onClick={submeter}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                    </svg>
    </Botao>*/}
        </InputGroup>
    )
}

export default Enviador;