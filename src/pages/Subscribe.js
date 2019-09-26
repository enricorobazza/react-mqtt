import React, {useState} from 'react';
import useSocket from 'use-socket.io-client';

// const socket = openSocket('http://localhost:8000');

// socket.on('messages', (message)=>{
//      alert(message);
//     //addMessage(message);
// })

//const socket = openSocket('http://localhost:8000');


function Subscribe(){

    const [messages, setMessages] = useState([]);;
    const [socket] = useSocket('http://localhost:8000');
    
    socket.connect();

    const addMessage = (message) =>{
        setMessages([...messages, message]);
    }

    

    socket.on('messages', (message)=>{
        addMessage(message);
    })

    socket.emit('subscribeToMessage', 'true');

    return(
        <>
            <h1>Subscribe Page</h1>
            <br />
            Mensagens recebidas: <br />
            <ul>
            {messages.map(message=>{
                return(<li>{message}</li>);
            })}
            </ul>
        </>
    );
}

export default Subscribe;