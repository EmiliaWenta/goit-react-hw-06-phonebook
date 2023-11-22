import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { removeContact } from '../../../redux/contactSlice';

import css from './ContactListItem.module.css';

export default function ContactListItem({ id, name, tel }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(id));
  };

  return (
    <li className={css.contactListItem__item} key={id.toString()}>
      {name}: {tel}
      <button
        className={css.contactListItem__button}
        type="button"
        onClick={handleRemove}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};
