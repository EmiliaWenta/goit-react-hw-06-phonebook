import React, { useState, useEffect, useContext, createContext } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const PhoneBookContext = createContext();

export const usePhoneBook = () => useContext(PhoneBookContext);

export const PhoneBookProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [initialValue] = useState('');

  const reset = form => {
    form.elements.name.value = initialValue;
    form.elements.number.value = initialValue;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const loginInputId = nanoid();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const tel = form.elements.number.value;

    const arrayOfName = contacts.map(contact => contact.name.toLowerCase());

    if (arrayOfName.includes(name.toLowerCase())) {
      Notify.failure(`${name} is already in contacts`);
      return;
    } else {
      const newContact = { name: name, id: loginInputId, number: tel };
      setContacts(prev => [...prev, newContact]);
    }
    reset(form);
  }

  function changeSubmit(e) {
    setFilter(e.target.value);
  }

  function deleteContact(id) {
    const updatedContacts = contacts.filter(cont => cont.id !== id);
    setContacts(updatedContacts);
  }

  useEffect(() => {
    const contactsJSON = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactsJSON);
  }, [contacts]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (savedContacts === null) {
      setContacts([]);
    } else {
      setContacts(savedContacts);
    }
  }, []);

  return (
    <PhoneBookContext.Provider
      value={{
        contacts,
        filter,
        initialValue,
        deleteContact,
        changeSubmit,
        handleSubmit,
      }}
    >
      {children}
    </PhoneBookContext.Provider>
  );
};

PhoneBookContext.Provider.propTypes = {
  value: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string.isRequired,
    initialValue: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
    changeSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }),
};
