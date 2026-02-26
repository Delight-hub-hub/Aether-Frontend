import { useEffect, useState } from "react";

export default function Admin() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/clients")
      .then(res => res.json())
      .then(data => setClients(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Client Submissions</h1>

      {clients.map(client => (
        <div key={client._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{client.name}</h3>
          <p>Email: {client.email}</p>
          <p>Phone: {client.phone}</p>
          <p>Message: {client.message}</p>
          <p>Date: {new Date(client.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}