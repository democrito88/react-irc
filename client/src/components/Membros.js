import React, {useState, useEffect} from 'react';
import Membro from './Membro';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { ListGroup } from 'react-bootstrap';

function Membros({socket}){

    var [membros, setMembros] = useState([]);
    
    useEffect(function(){
        socket.on('atualizarMembros', function(data){
            setMembros([...membros, data.membros]);
        });
    }, [socket, membros]);
    
    return(
        <Card>
            <CardHeader>Membros Online</CardHeader>
            <ListGroup variant="flush">
                {membros.map((membro, index) => (<Membro membro={membro}/>))}
            </ListGroup>
        </Card>
    );
}

export default Membros;