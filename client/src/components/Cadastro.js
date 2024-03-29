import React, {useState} from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import io from 'socket.io-client';

const URL_CONEXAO = "http://localhost:3001";

const socket = io(URL_CONEXAO, {
  cors: {
    origin: '*',
    methods: ['GET','POST']
  }
});

function Cadastro() {
    var [nome, setNome] = useState("");
    var [senha, setSenha] = useState("");
    var [avatar, setAvatar] = useState("");

    const handleNome = function(e){
        setNome(e.target.value);
        if(nome.length < 4){
            document.getElementById("nome").setAttribute("style", "border-color: red");
        }else{
            document.getElementById("nome").setAttribute("style", "border-color: green");
        }
    };

    const handleSenha = function(e){
        setSenha(e.target.value);
        if(senha.length < 6){
            document.getElementById("senha").setAttribute("style", "border-color: red");
        }else{
            document.getElementById("senha").setAttribute("style", "border-color: green");
        }
    };

    const handleAvatar = function(e){
        setAvatar(e.target.value);
    };

    const cadastrar = function(){
        if(nome.length > 4 && senha.length > 6){
            socket.emit("cadastrar", {nome, senha, avatar});
        }else if(nome.length <= 4){
            document.getElementById("nomeLegenda").setAttribute("style", "display: block;");
        }else if(senha.length <= 6){
            document.getElementById("senhaLegenda").setAttribute("style", "display: block;");
        }
    }

    return (
        <div className='container my-3'>
            <Card className='p-3'>
                <Form>
                    <Form.Group className="mb-3" controlId="cadastroAvatar">
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control 
                        id="avatar"
                        type="file" 
                        placeholder="Selecione um arquivo de imagem" 
                        value={avatar} 
                        onChange={handleAvatar}
                            />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cadastroNome">
                        <Form.Label>Nome para Login</Form.Label>
                        <Form.Control
                        id="nome" 
                        type="nome" 
                        placeholder="login" 
                        value={nome} 
                        onChange={handleNome}
                        />
                        {/*<small className='mensagemLogin'>O nome de login deve conter ao menos 4 caracteres</small>*/}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cadastroSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control 
                        id="senha"
                        type="password" 
                        placeholder="No mínimo 6 caracteres" 
                        value={senha} 
                        onChange={handleSenha}
                        />
                        {/*<small className='mensagemSenha'>A senha deve conter ao menos 6 caracteres</small>*/}
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={cadastrar}>
                        Criar
                    </Button>
                </Form>
            </Card>
        </div>
    );
}

export default Cadastro;