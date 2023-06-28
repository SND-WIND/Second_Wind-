import React, { useState, useEffect,useContext} from "react";
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { getAllUsers } from "../adapters/user-adapter";
import { createMessage, getConversation } from "../adapters/messages-adapter";
import CurrentUserContext from '../contexts/current-user-context';


export default function Messages() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [chattingWith, setChattingWith] = useState(null);

  const { currentUser } = useContext(CurrentUserContext);
  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  const startChat = (user) => {
    setChattingWith(user);
  }

  const sendMessage = async (event) => {
    event.preventDefault();
    const newMessage = await createMessage(currentUser.id,chattingWith.id, message);
    const [messages] = await getConversation(chattingWith.id);
    console.log("msg",messages);
    setMessages(messages);
    setMessage('');
  }
  


  if (!chattingWith) {
    return (
      <div>
        //TO FIX:
        //show all users EXECEPT the current user
        //
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
    //this whole thing needs to be underneath inline with the messages header
    //needs to be stylized much better
    // other user background color white black text
    //user  background color purple maybe white text
    //text area needs a bubble line with a dope send button
    //
    <div className="messages-container" >
      <h1>Chatting with {chattingWith.username}</h1>
      <ul>
        {messages.map(message => (
          
          <li key={message.id}>
            <p>{message.text}</p>
          </li>
        ))}
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