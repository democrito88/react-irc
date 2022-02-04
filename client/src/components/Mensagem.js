import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../css/Mensagem.css';

function Mensagem({usuario, mensagem}){
    return (
        <Row>
            <Col>
                <div className={usuario === mensagem.username? 'mensagem-propria' : 'mensagem'} key={mensagem.id}>
                    <span className='autor'>{mensagem.username}</span><br/>
                    <span className='conteudo'>{mensagem.message}</span><br/>
                    <span className='hora'>{mensagem.tempo}</span>
                </div>
            </Col>
        </Row>
    )
}

export default Mensagem;