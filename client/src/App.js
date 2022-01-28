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
  var [sala, setSala] = useState("");

  const socket = io(URL_CONEXAO, {
    cors: {
      origin: '*',
      methods: ['GET','POST']
    }
  });

  const login = (input) => {
    if(input.nomeLogin !== "" || input.sala !== ""){
      setLogado(true);
      socket.emit('login', input);
      setUserName(input.nomeLogin);
      setSala(input.sala);
    }
  }

  if(!logado){
    return(
    <Login login={login}/>
    )
  }else{
    return(
    <Container fluid className="App">
      <Row>
        <Col md={9}>
          <JanelaChat socket={socket} setUserName={setUserName} username={username} sala={sala}/>
        </Col>
        <Col md={3}>
          <Membros socket={socket}/>
        </Col>
      </Row>
    </Container>
          )
    }
}

export default App;
