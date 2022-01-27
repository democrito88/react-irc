import React, { useState } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JanelaChat from './components/JanelaChat';
import Membros from './components/Membros';
import Login from './components/Login';
import { Container, Row, Col } from 'react-bootstrap';
import io from "socket.io-client";
const URL_CONEXAO = "http://192.168.10.23:3001";

function App() {
  var [logado, setLogado] = useState(false);
  var [username, setUserName] = useState("");
  var [membros, setMembros] = useState([]);
  var [conversa, setConversa] = useState([]);

  function updateConversa(novaMensagem){
    setConversa([...conversa, novaMensagem]);
  }

  function updateMembros(novoMembro){
    setMembros([...membros, novoMembro]);
  }

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
    socket.emit('envio', {username: username, message: inputData});
  }

  socket.on('iniciarChat', function(data){
    setUserName(data.username);
    updateConversa(data.conversa);
  });

  socket.on('atualizarMembros', function(data){
    updateMembros(data.membros);
  })

  socket.on('recebe', function(novaMensagem){
    updateConversa(novaMensagem);
    console.log(conversa);
  })

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
          <JanelaChat conversa={conversa} username={username} handleEnvioMensagens={handleEnvioMensagens} />
        </Col>
        <Col md={3}>
          <Membros membros={membros}/>
        </Col>
      </Row>
    </Container>
          )
    }
}

export default App;
