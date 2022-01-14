import React, {useState} from 'react';
import Membro from './Membro';
import { Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { ListGroup } from 'react-bootstrap';
import AddMembro from './AddMembro';

function Membros(){
    const [membros, setMembros] = useState([
        {
            nome: '', 
            id: ''
        }
    ]);

    function handleMembros(membro){
        const novoMembro = [...membros, {
            nome: membro,
            id: Math.random()
        }]

        setMembros(novoMembro);
    }

    return(
        <Card>
            <CardHeader>Membros Online</CardHeader>
            <ListGroup variant="flush">
                {membros.map((membro) => (<Membro membro={membro}/>))}
            </ListGroup>
            <AddMembro handleMembros={handleMembros}/>
        </Card>
    );
}

export default Membros;