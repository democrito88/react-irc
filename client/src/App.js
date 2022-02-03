import React, { useState } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JanelaChat from './components/JanelaChat';
import Membros from './components/Membros';
import Login from './components/Login';
import { Container, Row, Col } from 'react-bootstrap';
import io from "socket.io-client";
const URL_CONEXAO = "http://192.168.10.23:3001";

const socket = io(URL_CONEXAO, {
  cors: {
    origin: '*',
    methods: ['GET','POST']
  }
});

export default function App() {
  var [logado, setLogado] = useState(false);
  var [username, setUserName] = useState("");
  var [sala, setSala] = useState("");

  const login = (input) => {
    if(input.nomeLogin !== "" || input.sala !== ""){
      setLogado(true);
      console.log("App - Socket de id "+socket.id)
      socket.emit('login', input);
      setUserName(input.nomeLogin);
      setSala(input.sala);
    }
  }

  return <div>
    {!logado ?
      <Login login={login}/>
  :
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
    }
  </div>
  
}
