import React, { useState, useEffect } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JanelaChat from './components/JanelaChat';
import Membros from './components/Membros';
import { Modal, Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Botao from './components/Botao.js';
import { Container, Row, Col } from 'react-bootstrap';
import io from 'socket.io-client';

const URL_CONEXAO = "http://192.168.1.11:3001";
var socket = io(URL_CONEXAO,{
  withCredentials: true,
   extraHeaders: {    
     "Access-Control-Allow-Origin": "*"  
    }
});

function App() {
  var [logado, setLogado] = useState(false);
  var [username, setUserName] = useState("");

  useEffect(function(){
    socket = io(URL_CONEXAO);
  });

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

  function login(){
    socket.emit('login', {username: nomeLogin, sala: sala});
    handleClose();
  }

  socket.on('ingressar', function(resposta){
    setLogado(resposta.logado);
    setUserName(resposta.username);
  });

  function enviarMensagem(novaMensagem){
    socket.emit('enviarMensagem', novaMensagem);
  }

  return (
    <>
      {!logado ?
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Faça parte da nossa comunidade</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                <FormGroup>
                    <InputGroup className="mb-3">
                        <FormControl type="text" onChange={handleNomeLoginChange} value={nomeLogin} placeholder='nome de usuário'/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl type="text" onChange={handleSalaChange} value={sala} placeholder='nome da sala'/>
                    </InputGroup>
                    <Botao variant="outline-secondary" onClick={login}>
                        Entrar!
                    </Botao>
                </FormGroup>
              </Form>
          </Modal.Body>
        </Modal>
      :
        <Container fluid className="App">
          <Row>
            <Col md={9}>
              <JanelaChat username={username} onEnviarMensagem={this.enviarMensagem}/>
            </Col>
            <Col md={3}>
              <Membros/>
            </Col>
          </Row>
        </Container>
      }
    </> 
  );
}

export default App;
