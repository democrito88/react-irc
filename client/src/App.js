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
        <Login/>
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
