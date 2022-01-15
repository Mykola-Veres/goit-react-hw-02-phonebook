import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm, ContactsFormBtn } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChangeName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handlerChangeNumber = e => {
    this.setState({
      number: e.target.value,
    });
  };

  handlerSubmitUser = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(contact);
    this.resetName();
  };

  resetName = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactsForm onSubmit={this.handlerSubmitUser}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handlerChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handlerChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <ContactsFormBtn type="submit">Add contact</ContactsFormBtn>
      </ContactsForm>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
