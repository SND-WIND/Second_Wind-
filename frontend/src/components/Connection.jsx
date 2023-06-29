import React from "react";
import {
  createConnection,
  updateConnection,
  deleteConnection,
} from "../adapters/connection-adapter";

function Connection({ connection }) {
  const handleConnect = (e) => {
    console.log("connect", connection);
    const data = createConnection({
      user_id: connection.id,
      account_type: connection.accountType,
    });
    console.log(data);
  };

  return (
    <div key={connection.id} className="card">
      <img
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        alt={connection.name}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{connection.name}</h2>
        <p className="card-subtitle">{connection.username}</p>
        <button className="card-button" onClick={handleConnect}>
          Connect
        </button>
      </div>
    </div>
  );
}

export default Connection;
