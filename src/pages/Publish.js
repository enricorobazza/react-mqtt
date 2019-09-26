import React, {useState} from 'react';
import useSocket from 'use-socket.io-client';


function Publish(){

    const [message, setMessage] = useState("");

    const [socket] = useSocket('http://localhost:8001');

    return(
        <>
            <h1>Publish Page</h1>
            <br />
            <input type="text" placeholder="Mensagem" onChange={(event)=>{setMessage(event.target.value)}} />
            <br />
            <button onClick={(event)=>{
                event.preventDefault();
                socket.emit('messageSend', message);
            }}>Enviar Mensagem</button>
        </>
    );
}

export default Publish;