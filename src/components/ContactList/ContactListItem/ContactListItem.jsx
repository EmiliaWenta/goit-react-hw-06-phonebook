import React from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { usePhoneBook } from 'hooks/PhoneBookContext';

export default function ContactListItem({ id, name, number }) {
  const { deleteContact } = usePhoneBook();
  return (
    <li className={css.contactListItem__item} key={id.toString()}>
      {name}: {number}
      <button
        className={css.contactListItem__button}
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
