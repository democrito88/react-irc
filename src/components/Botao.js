import React from 'react';
import { Button } from 'react-bootstrap';

function Botao({children, onClick}){
    return (<Button onClick={onClick}>{children}</Button>);
}

export default Botao;