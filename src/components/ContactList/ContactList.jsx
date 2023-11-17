import React from 'react';
import css from './ContactList.module.css';
import ContactListItem from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function ContactList() {
  const contacts = useSelector(state => state.contact);
  const filterValue = useSelector(state => state.filter);

  const contactListItem = contacts
    .filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()))
    .map(item => (
      <ContactListItem
        id={item.id}
        name={item.name}
        tel={item.tel}
        key={item.id}
      />
    ));

  return <ul className={css.contactList}>{contactListItem}</ul>;
}
