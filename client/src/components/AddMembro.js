import React, { useState } from 'react'
import { Form, FormControl, FormGroup } from 'react-bootstrap'
import Botao from './Botao'

function AddMembro({handleMembros}){
    const [inputData, setInputData] = useState('');

    function handleMudancaInput(e){
        setInputData(e.target.value);
    }

    function entrarNoChat(){
        handleMembros(inputData)
    }

    return(
        <Form>
            <FormGroup>
                <FormControl type="text" onChange={handleMudancaInput} value={inputData}/>
                <Botao onClick={entrarNoChat}>Entrar</Botao>
            </FormGroup>
        </Form>
    )
}

export default AddMembro