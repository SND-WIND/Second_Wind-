import { useState, useEffect } from "react";
import { getAllUsers } from "../adapters/user-adapter";

function Connections() {
  const [connections, setConnections] = useState([]);

  // Fetch connections for user with ID userId from API
  useEffect(() => {
    getAllUsers().then(setConnections);
  }, []);

  return (
    <div>
      <h1>Connections</h1>
      <ul>
        {connections.map((connection) => (
          <div key={connection.id} className="card">
            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt={connection.name} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{connection.name}</h2>
              <p className="card-subtitle">{connection.username}</p>
              <button
                className="card-button"
                onClick={() => onConnect(connection)}
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Connections;
