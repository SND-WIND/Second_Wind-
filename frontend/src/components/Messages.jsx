import React, { useState, useEffect } from "react";
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import io from "socket.io-client";
import { getAllUsers } from "../adapters/user-adapter";
const socket = io.connect('http://localhost:3000'); 

function UserCard({ user, onStartChat }) {
  return (
    <Card onClick={() => onStartChat(user)} style={{ marginBottom: "10px", cursor: "pointer" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.username}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Messages() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [chattingWith, setChattingWith] = useState(null);

  useEffect(() => {
    getAllUsers().then(setUsers);
    socket.on('connect', () => {
    
      console.log('Connected to the server');
    });

    socket.on('chat message', (msg) => {
      setMessages((oldMessages) => [...oldMessages, msg]);
    });

    // Use the function to fetch users from the backend
    

    return () => {
      socket.off('connect');
      socket.off('chat message');
    };
  }, []);

  const startChat = (user) => {
    setChattingWith(user);
    setRoom(user.id); // use the user id as the room id
  }

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit('chat message', { room, message });
    setMessage('');
  }

  if (!chattingWith) {
    return (
      <div>
        {users.map(user => (
          <UserCard key={user.id} user={user} onStartChat={startChat} />
        ))}
      </div>
    )
  }

  return (
    <div className="messages-container" >
      <h1>Chatting with {chattingWith.username}</h1>
      <ul>
        {messages.map((msg, index) => 
          <li key={index}>{msg}</li>
        )}
      </ul>
      <form onSubmit={sendMessage}>
        <TextField 
        multiline
          label="Message"
          value={message} 
          color="primary"
          onChange={e => setMessage(e.target.value)} 
          variant="filled" />
        <Button type="submit" variant="contained" color="primary">Send</Button>
      </form>
    </div>
  );
}