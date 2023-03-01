import React, { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  return (
    <div className="contacts-card">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr className="card-title">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody className="body-card">
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  className="card-img"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td className="card-name">{contact.name}</td>
              <td className="card-popularity">
                {contact.popularity.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
