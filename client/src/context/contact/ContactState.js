import React, { useReducer } from "react";
import * as uuid from 'uuid';
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRNET,
  UPDATE_CURRENT,
  FILTER_CURRENT,
  CLEAR_FILTER
} from "../type";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "D4y",
        email: "d4y@gmail.com",
        phone: "666-666-6666",
        type: "personal"
      },
      {
        id: 2,
        name: "kabbage",
        email: "d4y@gmail.com",
        phone: "666-666-6666",
        type: "professional"
      },
      {
        id: 3,
        name: "willow",
        email: "d4y@gmail.com",
        phone: "666-666-6666",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
