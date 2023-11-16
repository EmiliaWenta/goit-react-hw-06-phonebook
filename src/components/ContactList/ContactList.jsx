import React from 'react';
import css from './ContactList.module.css';
import ContactListItem from './ContactListItem/ContactListItem';

import { usePhoneBook } from 'hooks/PhoneBookContext';

export default function ContactList() {
  const { contacts, filter } = usePhoneBook();

  const contactListItem = contacts
    .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    .map(item => (
      <ContactListItem
        id={item.id}
        name={item.name}
        number={item.number}
        key={item.id}
      />
    ));

  return <ul className={css.contactList}>{contactListItem}</ul>;
}
