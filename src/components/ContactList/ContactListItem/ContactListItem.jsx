import React from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { removeContact } from '../../../redux/contactSlice';
import { useDispatch } from 'react-redux';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(id));
  };

  return (
    <li className={css.contactListItem__item} key={id.toString()}>
      {name}: {number}
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
  number: PropTypes.string.isRequired,
};
