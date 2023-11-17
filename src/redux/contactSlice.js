import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const contactInitialState = [
  { id: 'id-1', name: 'Hermione Kline', tel: '443-89-12' },
  { id: 'id-2', name: 'Eden Clements', tel: '645-17-79' },
  { id: 'id-3', name: 'Annie Copeland', tel: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        const arrayOfName = state.map(contact => contact.name.toLowerCase());

        if (arrayOfName.includes(action.payload.name.toLowerCase())) {
          Notify.failure(
            `${action.payload.name} already exist in Your Phonebook`
          );
          return;
        } else {
          state.push(action.payload);
        }
      },
      prepare: (name, tel) => {
        return {
          payload: {
            name,
            tel,
            id: nanoid(),
          },
        };
      },
    },

    removeContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },

    checkContact: (state, action) => {
      state = [...action.payload];
    },
  },
});

export const { addContact, removeContact, checkContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
