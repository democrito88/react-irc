import React, {useState, useEffect} from 'react';
import { Modal, Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Botao from './Botao.js';
import io from 'socket.io-client';

const URL_CONEXAO = "http://192.168.1.11:3001";
let socket;

function Login({logado}) {
  var [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  var [nomeLogin, setNomeLogin] = useState("");

  const handleNomeLoginChange = function(e){
      setNomeLogin(e.target.value);
  };

  var [sala, setSala] = useState("");

  const handleSalaChange = function(e){
      setSala(e.target.value);
  };

  function login(e){
    e.preventDefault();
    socket.emit('login', {username: nomeLogin, sala: sala});
    handleClose();
  }

  useEffect(function(){
    socket = io(URL_CONEXAO,{
      withCredentials: true,
       extraHeaders: {    
         "Access-Control-Allow-Origin": "*"  
        }
    });
  });

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Faça parte da nossa comunidade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={login}>
              <FormGroup>
                  <InputGroup className="mb-3">
                      <FormControl type="text" onChange={handleNomeLoginChange} value={nomeLogin} placeholder='nome de usuário'/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                      <FormControl type="text" onChange={handleSalaChange} value={sala} placeholder='nome da sala'/>
                  </InputGroup>
                  <Botao variant="outline-secondary">
                      Entrar!
                  </Botao>
              </FormGroup>
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;