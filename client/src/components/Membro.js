import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

function Membro({key, membro}){
    return(<ListGroupItem key={key}>{membro.username}</ListGroupItem>);
}

export default Membro;