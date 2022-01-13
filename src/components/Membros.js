import React from 'react';
import Membro from './Membro';
import './Membros.css'

function Membros({membros}){
    return(
        <div className='membros'>
            <ul>
                {membros.map((membro) => (<Membro membro={membro}/>))}
            </ul>
        </div>
    );
}

export default Membros;