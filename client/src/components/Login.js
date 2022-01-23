import React, {useState, useEffect} from 'react';
import { Modal, Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Botao from './Botao.js';
import io from 'socket.io-client';

const URL_CONEXAO = "http://192.168.1.11:3001";
let socket;

function Login({logado}) {

  useEffect(function(){
    socket = io(URL_CONEXAO,{
      withCredentials: true,
       extraHeaders: {    
         "Access-Control-Allow-Origin": "*"  
        }
    });
  });

  
  
  return (
    <>
      
    </>
  );
}

export default Login;