import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Зберігаємо контакти у локальне сховище при кожній зміні стану контактів
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const isExistingContact = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p className="text">No matches found!</p>
      )}
    </>
  );
}

export default App;
