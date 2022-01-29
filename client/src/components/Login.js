import React, {useState} from 'react';
import { Modal, Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Botao from './Botao.js';

function Login({login}) {
  var [show, setShow] = useState(true);
  var [nomeLogin, setNomeLogin] = useState("");
  var [sala, setSala] = useState("");

  const handleClose = () => setShow(false);

  const handleNomeLoginChange = function(e){
      setNomeLogin(e.target.value);
  };

  const handleSalaChange = function(e){
      setSala(e.target.value);
  };

  function submeter(e){
    login({nomeLogin: nomeLogin, sala: sala});
    handleClose();
  }

  return (
    <>
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
              </FormGroup>
              <FormGroup>
                <InputGroup className="mb-3">
                    <FormControl type="text" onChange={handleSalaChange} value={sala} placeholder='nome da sala'/>
                </InputGroup>
              </FormGroup>
              <Botao variant="outline-secondary" type="submit" onClick={submeter}>
                Entrar!
              </Botao>
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;