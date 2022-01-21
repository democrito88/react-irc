import React, { useState } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JanelaChat from './components/JanelaChat';
import Membros from './components/Membros';
import Login from './components/Login';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function App() {
  const [logado, setLogado] = useState();

  return (
    <>
      {!logado ? <Login logado={logado}/> : 
        <Container fluid className="App">
          <Row>
            <Col md={9}>
              <JanelaChat/>
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
