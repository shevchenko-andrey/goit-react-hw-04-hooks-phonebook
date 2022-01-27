import React, { Component } from 'react';

import toast, { Toaster } from 'react-hot-toast';

import { nanoid } from 'nanoid';

import { GlobalStyle } from '../Base/BaseStyle';

import ContactForm from './Form';
import Section from './Section';
import Contacts from './Contacts';
import Filter from './Filter';

const STORAGE_CONTACTS_KEY = 'contacts';
class App extends Component {
  static defaultProps = {
    state: {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    },
  };

  state = this.props.state;

  componentDidMount() {
    const contacts = localStorage.getItem(STORAGE_CONTACTS_KEY);
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }
  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem(STORAGE_CONTACTS_KEY, JSON.stringify(contacts));
    }
  }
  handleSubmitForm = ({ name, number }) => {
    const { contacts } = this.state;
    const isDubled = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    this.setState(({ contacts }) => {
      if (isDubled) {
        toast.error(`${name} is already in contacts`);
        return;
      }
      return {
        contacts: [
          ...contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ],
      };
    });
  };
  handleDeleteContact = contactId => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contactId !== contact.id),
    });
  };
  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return (
      <>
        <GlobalStyle />
        <Section title="PhoneBook">
          <ContactForm onSubmit={this.handleSubmitForm} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts
            contacts={visibleContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
        <Toaster />
      </>
    );
  }
}

export default App;
