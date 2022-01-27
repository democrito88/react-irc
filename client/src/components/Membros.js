import React from 'react';
import Membro from './Membro';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { ListGroup } from 'react-bootstrap';

function Membros({membros}){

    return(
        <Card>
            <CardHeader>Membros Online</CardHeader>
            <ListGroup variant="flush">
                {membros.map((membro, index) => (<Membro key={index} membro={membro}/>))}
            </ListGroup>
        </Card>
    );
}

export default Membros;