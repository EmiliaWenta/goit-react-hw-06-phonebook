import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { checkContact } from '../redux/contactSlice';

import css from './App.module.css';

export function App() {
  const contacts = useSelector(state => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    const contactsJSON = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactsJSON);
  }, [contacts]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    dispatch(checkContact(savedContacts));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <Form />
      <h2 className={css.header}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
