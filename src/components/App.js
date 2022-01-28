import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle } from '../Base/BaseStyle';

import useLocalStorage from '../hooks/useLocalStorage';
import ContactForm from './Form';
import Section from './Section';
import Contacts from './Contacts';
import Filter from './Filter';

const STORAGE_CONTACTS_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useLocalStorage(STORAGE_CONTACTS_KEY, [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const handleSubmitForm = ({ name, number }) => {
    const isDubled = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDubled) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    setContacts([
      ...contacts,
      {
        id: nanoid(),
        name: name,
        number: number,
      },
    ]);
  };

  const handleDeleteContact = contactId => {
    const newContacts = contacts.filter(contact => contactId !== contact.id);
    setContacts(newContacts);
  };

  const changeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <>
      <GlobalStyle />
      <Section title="PhoneBook">
        <ContactForm onSubmit={handleSubmitForm} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <Contacts
          contacts={visibleContacts}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
      <Toaster />
    </>
  );
};

export default App;
