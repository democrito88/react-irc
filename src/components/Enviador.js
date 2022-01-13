import React from 'react'
import './Enviador.css'
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

function Enviador(){
    return (
        <Form className='enviador'>
            <FormGroup>
                <FormControl type="text" /><Button variant="primary" onClick="enviaMensagem()">Enviar</Button>
            </FormGroup>
        </Form>
    )
}

export default Enviador;