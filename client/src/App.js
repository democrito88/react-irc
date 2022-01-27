import React, { useState } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JanelaChat from './components/JanelaChat';
import Membros from './components/Membros';
import Login from './components/Login';
import { Container, Row, Col } from 'react-bootstrap';
import io from "socket.io-client";
const URL_CONEXAO = "http://localhost:3001";

function App() {
  var [logado, setLogado] = useState(false);
  var [username, setUserName] = useState("");
  const socket = io(URL_CONEXAO, {
    cors: {
      origin: '*',
    }
  });

  function login(input){
    if(input.nomeLogin !== "" || input.sala !== ""){
      setLogado(true);
      socket.emit('login', input);
      setUserName(input.nomeLogin);
    }
  }

  function handleEnvioMensagens(inputData){
    console.log(inputData);
    socket.emit('envioMensagem', {username: username, message: inputData});
  }

  if(!logado){
    console.log("logado: "+logado);
    return(
    <Login login={login}/>
    )
  }else{
    console.log("logado: "+logado);
    return(
    <Container fluid className="App">
      <Row>
        <Col md={9}>
          <JanelaChat username={username} handleEnvioMensagens={handleEnvioMensagens} />
        </Col>
        <Col md={3}>
          <Membros/>
        </Col>
      </Row>
    </Container>
          )
    }
}

export default App;
