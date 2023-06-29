import { useState, useEffect } from "react";
import Connection from "./Connection";
import { getAllUsers } from "../adapters/user-adapter";
import { getConnectionRequest } from "../adapters/connection-adapter";

function ConnectionList() {
  const [connections, setConnections] = useState([]);
  const [connectionRequests, setConnectionRequests] = useState([]);

  // Fetch connections for user with ID userId from API
  useEffect(() => {
    getAllUsers().then(setConnections);
  }, []);

  useEffect(() => {
    const checkConnectionRequests = async () => {
      const data = await getConnectionRequest();
      console.log(data);
      setConnectionRequests(data);
    };
    checkConnectionRequests();
  }, []);

  return (
    <div>
      <h1>Connections</h1>
      <ul>
        //modify code to display all users except current user
        {connections.map((connection) => (
          <Connection key={connection.id} connection={connection} />
        ))}
      </ul>
    </div>
  );
}

export default ConnectionList;
