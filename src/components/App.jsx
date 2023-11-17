import React from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';
import { checkContact } from '../redux/contactSlice';

export function App() {
  const contacts = useSelector(state => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    const contactsJSON = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactsJSON);
  }, [contacts]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(savedContacts);

    dispatch(checkContact(savedContacts));
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
