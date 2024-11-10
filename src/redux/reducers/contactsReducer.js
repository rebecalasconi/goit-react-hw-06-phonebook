// src/redux/reducers/contactsReducer.js

const ADD_CONTACT = 'ADD_CONTACT';
const REMOVE_CONTACT = 'REMOVE_CONTACT';
const SET_FILTER = 'SET_FILTER';

const initialState = {
  contacts: [],  // Lista de contacte este un array gol la început
  filter: '',
};

// Reducerul pentru contactele tale
const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: Array.isArray(state.contacts) ? [...state.contacts, action.payload] : [action.payload],
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: Array.isArray(state.contacts) ? state.contacts.filter(contact => contact.id !== action.payload) : [],
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

// Action creators
export const addContact = contact => ({ type: ADD_CONTACT, payload: contact });
export const deleteContact = contactId => ({ type: REMOVE_CONTACT, payload: contactId });
export const setFilter = filter => ({ type: SET_FILTER, payload: filter });

export default contactsReducer;