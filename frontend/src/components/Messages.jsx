import React, { useState, useEffect, useContext, useRef } from "react";
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { getAllUsers } from "../adapters/user-adapter";
import { createMessage, getConversation } from "../adapters/messages-adapter";
import CurrentUserContext from '../contexts/current-user-context';
import io from "socket.io-client";


export default function Messages() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [chattingWith, setChattingWith] = useState(null);
  const { currentUser } = useContext(CurrentUserContext);
  const socketRef = useRef();

  useEffect(() => {
    getAllUsers().then(users => setUsers(users.filter(user => user.id !== currentUser.id)));

    socketRef.current = io('http://localhost:3000');

    socketRef.current.on("connect", () => {
      console.log("Connected to the server");
    });

    socketRef.current.on("new message", (msg) => {
      console.log("Message received", msg);
      setMessages((oldMessages) => [...oldMessages, msg]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [currentUser]);

  // Fetch all messages related to the conversation when chattingWith changes
  useEffect(() => {
    if (chattingWith) {
      getConversation(chattingWith.id)
        .then(([messages]) => {
          console.log("messages after sending:", messages);
          setMessages(messages);
        })
        .catch(error => console.error(error));
    }
  }, [chattingWith]);

  const startChat = (user) => {
    console.log(user)
    setChattingWith(user);
  }
  const handleBack = () => {
    setChattingWith(null);
  }
  const sendMessage = async (event) => {
    event.preventDefault();
    const newMessage = await createMessage(currentUser.id, chattingWith.id, message);
    socketRef.current.emit("new message", newMessage);
    getConversation(chattingWith.id)
      .then(([messages]) => {
        console.log("messages after sending:", messages);
        setMessages(messages);
      })
      .catch(error => console.error(error));
    setMessage('');
  };


  if (!chattingWith) {
    return (
      <div>
        <Typography variant="h2" component="div"
        sx={{ bgcolor: 'primary.main',borderRadius: 5, color: 'white', p: 1, textAlign: 'center' , marginBottom: "1em" }}
        > 
        Messages
        
        </Typography>
        {users.map(user => (
          <Card key={user.id} onClick={() => startChat(user)} style={{ marginBottom: "10px", cursor: "pointer" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {user.username}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="messages-container" >
      <Button onClick={handleBack} variant="contained" color="secondary">Back</Button>
      <h5>Chat with {chattingWith.username}</h5>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className={`message-bubble ${message.sender_id === currentUser.id ? "right" : "left"}`}>
            <p>{message.text}</p>
          </li>
        ))}
      </ul>
      <form className="message-form" onSubmit={sendMessage}>
        <TextField
          multiline
          label="Message"
          value={message}
          sx={{ bgcolor: 'secondary.main' }}

          onChange={e => setMessage(e.target.value)}
          variant="filled" />
        <Button type="submit" variant="contained" color="primary">Send</Button>
      </form>
    </div>
  );
}
