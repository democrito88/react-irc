import React, {useState} from 'react';
import { Modal, Button, Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Botao from './Botao.js';
import Axios from 'axios';

function Login({logado}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [inputData, setInputData] = useState();

    const handleInputChange = function(e){
        setInputData(e.target.value);
    };

    function login(inputData){
        Axios.post('http://192.168.1.11:3001/login',{
            username: "",
            message: inputData
        }).then(function(resposta){
            console.log(resposta);
        });
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Faça parte da nossa comunidade</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                <FormGroup>
                    <InputGroup className="mb-3">
                        <FormControl type="text" onChange={handleInputChange} value={inputData} />
                        <Botao variant="outline-secondary" onClick={login}>
                            Entrar!
                        </Botao>
                    </InputGroup>
                </FormGroup>
              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Login;