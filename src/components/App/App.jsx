import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import shortid from 'shortid';
import ContactList from 'components/ContactList/ContactList';
import { Container, Title } from './App.styled';
import Filter from 'components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'filter':
        setFilter(value);
        break;
      default:
        return;
    }
  };

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const matched = contacts
      .flatMap(({ name }) => name.toLowerCase())
      .find(e => e === name.toLowerCase());

    if (matched) {
      alert(`${name} is already in contacts!`);
      return false;
    } else {
      setContacts([contact, ...contacts]);
      return true;
    }
  };

  const deleteContact = delId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== delId));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <Filter name="filter" value={filter} onChange={handleInputChange} />
      {contacts.length === 0 ? (
        `Your phonebook is empty. Add first contact!`
      ) : visibleContacts.length === 0 ? (
        `No matches founded`
      ) : (
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      )}
    </Container>
  );
}
