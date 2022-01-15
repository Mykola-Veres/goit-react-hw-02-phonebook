import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ol>
    <ContactItem contactsItem={contacts} onDeleteContact={onDeleteContact} />
  </ol>
);

export default ContactList;
