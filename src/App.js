import React, { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const handleRandomContacts = () => {
    const randomContacts = [];
    const contactsCopy = [...contactsData];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * contactsCopy.length);
      const randomContact = contactsCopy[randomIndex];
      randomContacts.push(randomContact);
      contactsCopy.splice(randomIndex, 1);
    }
    setContacts(randomContacts);
  };

  return (
    <div className="contacts-card">
      <h1>IronContacts</h1>
      <button onClick={handleRandomContacts}>Add Random Contact</button>
      <table>
        <thead>
          <tr className="card-title">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>wonOscar </th>
            <th>wonEmmy </th>
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
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🏆" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
