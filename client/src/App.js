import React, { useState, useEffect } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JanelaChat from './components/JanelaChat';
import Membros from './components/Membros';
import Login from './components/Login';
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

  function login(input){
    socket.emit('login', input);
    setLogado(true);
    setUserName(input.nomeLogin);
  }

  function enviarMensagem(novaMensagem){
    socket.emit('enviarMensagem', novaMensagem);
  }

  function handleEnvioMensagens(inputData){
    console.log(inputData);
    socket.emit('envioMensagem', {username: username, message: inputData});
  }

  return (
    <>
      {!logado ?
        <Login login={login}/>
      :
        <Container fluid className="App">
          <Row>
            <Col md={9}>
              <JanelaChat username={username} onEnviarMensagem={this.enviarMensagem} handleEnvioMensagens={handleEnvioMensagens} />
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
