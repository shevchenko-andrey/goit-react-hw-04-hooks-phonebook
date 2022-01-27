import PropTypes from 'prop-types';
import { ContactList } from './contacts.styled';
import ContactsItem from '../ContactsItem';
function Contacts({ contacts, onDeleteContact }) {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          name={name}
          key={id}
          id={id}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactList>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
