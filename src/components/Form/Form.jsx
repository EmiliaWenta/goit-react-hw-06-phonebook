import React from 'react';
import css from './Form.module.css';
import { addContact } from '../../redux/contactSlice';
import { useDispatch } from 'react-redux';

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const tel = form.elements.number.value;
    dispatch(addContact(name, tel));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__label}>
        Name
        <input
          className={css.form__input}
          type="text"
          name="name"
          placeholder="Enter contact name..."
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.form__label}>
        Number
        <input
          className={css.form__input}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone-number..."
          required
        />
      </label>

      <button type="submit" className={css.form__button}>
        Add contact
      </button>
    </form>
  );
}
