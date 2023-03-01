import React, { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const handleRandomContacts = () => {
    const randomContacts = [...contacts];
    randomContacts.push(
      contactsData[Math.floor(Math.random() * (contactsData.length - 5) + 5)]
    );
    setContacts(randomContacts);
  };

  const handleSortbyName = () => {
    const sortByName = [...contacts].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setContacts(sortByName);
  };

  const handleSortbyPopularity = () => {
    const sortByPopularity = [...contacts].sort(
      (a, b) => a.popularity - b.popularity
    );
    setContacts(sortByPopularity);
  };

  const handleDeleteContact = (contactId) => {
    const filteredContacts = [...contacts].filter(
      (contact) => contact.id !== contactId
    );
    setContacts(filteredContacts);
  };

  return (
    <div className="contacts-card">
      <h1>IronContacts</h1>
      <div className="btn-functions">
        <button onClick={handleRandomContacts}>Add Random Contact</button>
        <button onClick={handleSortbyPopularity}>Sort by popularity</button>
        <button onClick={handleSortbyName}>Sort by name</button>
      </div>

      <table>
        <thead>
          <tr className="card-title">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar </th>
            <th>Won Emmy </th>
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
                />{" "}
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  className="btn-delete"
                >
                  Delete{" "}
                </button>
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
