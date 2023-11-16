import React from 'react';
import css from './Filter.module.css';
import { usePhoneBook } from 'hooks/PhoneBookContext';

export default function Filter() {
  const { filter, changeSubmit } = usePhoneBook();
  return (
    <div className={css.filter}>
      <p className={css.filter__title}>Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        name="nametofilter"
        value={filter}
        onChange={changeSubmit}
      />
    </div>
  );
}
