import React from 'react';
import Conversa from './Conversa';
import Enviador from './Enviador';
import { Stack } from 'react-bootstrap';
//import './JanelaChat.css'

function JanelaChat(){
    return (
        <Stack gap={3}>
            <Conversa/>
            <Enviador/>
        </Stack>
    );
}

export default JanelaChat;