import React, {useState} from 'react';
import { Modal, Form, FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';
import Botao from './Botao.js';

function Login({login, cadastrando}) {
  var [show, setShow] = useState(true);
  var [nomeLogin, setNomeLogin] = useState("");
  var [senha, setSenha] = useState("");
  var [salas, setSalas] = useState(["família","papo furado","amigos"]);

  const handleClose = () => setShow(false);

  const handleNomeLoginChange = function(e){
      setNomeLogin(e.target.value);
  };

  const handleSenha = function(e){
    setSenha(e.target.value);
  };

  const handleSalasChange = function(e){
      setSalas(e.target.value);
  };

  function submeter(e){
    login({nomeLogin: nomeLogin, sala: document.getElementById("salas").value});
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
                  <FormControl type="password" onChange={handleSenha} value={senha} placeholder='senha'/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Form.Select onChange={handleSalasChange} value={salas} id="salas">
                  {salas.map((sala) => <option value="{sala}">{sala}</option>)}
                </Form.Select>
              </FormGroup>
              <FormGroup>
                <Botao variant="outline-secondary" type="submit" onClick={submeter}>
                  Entrar!
                </Botao>
              </FormGroup>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>Ainda não tem cadastro? <Button onClick={cadastrando}>Clique aqui.</Button></p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;