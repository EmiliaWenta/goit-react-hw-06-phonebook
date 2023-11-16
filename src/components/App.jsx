import React from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export function App() {
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
