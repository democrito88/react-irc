import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

function Membro({membro}){
    return(<ListGroupItem >{membro.username}</ListGroupItem>);
}

export default Membro;