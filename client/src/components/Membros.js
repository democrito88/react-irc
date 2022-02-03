import React, {useState, useEffect} from 'react';
//import Membro from './Membro';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { ListGroup } from 'react-bootstrap';

function Membros({socket}){

    var [membros, setMembros] = useState([]);
    
    useEffect(function(){
        socket.on('atualizarMembros', function(data){
            console.log("Novo membro: ");
            console.log(data);
            setMembros(data.membros);
            console.log("Lista completa de membros: "+membros);
        });

        socket.once("iniciarMembro", function(data){
            console.log("Membros - socket com id: "+socket.id);
            setMembros(data.membros)
        })
    }, [socket, membros]);
    
    return(
        <Card>
            <CardHeader>Membros Online</CardHeader>
            <ListGroup variant="flush" as="ul">
                {membros.map((membro) => <ListGroup.Item>{membro}</ListGroup.Item>)}
            </ListGroup>
        </Card>
    );
}

export default Membros;