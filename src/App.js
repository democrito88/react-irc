import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JanelaChat from './components/JanelaChat';
import Membros from './components/Membros';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function App() {

  return (
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
  );
}

export default App;
