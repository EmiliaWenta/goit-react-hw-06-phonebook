import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = [];

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
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
    filterContact: (state, action) => {
      return state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { addContact, removeContact, filterContact } =
  contactSlice.actions;
export const contactReducer = contactSlice.reducer;
