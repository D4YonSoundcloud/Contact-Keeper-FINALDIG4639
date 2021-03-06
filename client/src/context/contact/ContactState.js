import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  GET_CONTACTS,
  CLEAR_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CURRENT,
  CLEAR_FILTER,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CONTACT_ERROR
} from "../type";

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = async contact => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const url = "api/contacts";
      const res = await axios.post(url, contact, config);

      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      const response = error.response;
      dispatch({ type: CONTACT_ERROR, payload: response });
    }
  };

  //Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get("/api/contacts");

      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (error) {
      const response = error.response;
      dispatch({ type: CONTACT_ERROR, payload: response });
    }
  };
  // Delete Contact
  const deleteContact = async id => {
    try {
      await axios.delete(`/api/contacts/${id}`);

      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
      const response = error.response;
      dispatch({ type: CONTACT_ERROR, payload: response });
    }
  };

  // Update Contact
  const updateContact = async contact => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const url = `api/contacts/${contact._id}`;
      const res = await axios.put(url, contact, config);

      dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (error) {
      const response = error.response;
      dispatch({ type: CONTACT_ERROR, payload: response });
    }
  };

  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };
  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        clearFilter,
        filterContacts,
        getContacts,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
