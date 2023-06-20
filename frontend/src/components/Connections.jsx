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
                        <img src={"2"} alt={connection.name} className="card-image" />
                        <div className="card-content">
                            <h2 className="card-title">{connection.name}</h2> 
                            <p className="card-subtitle">{connection.username}</p>
                            <button className="card-button" onClick={() => onConnect(connection)}>
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