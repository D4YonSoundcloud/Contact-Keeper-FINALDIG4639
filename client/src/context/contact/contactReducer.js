import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRNET,
  UPDATE_CURRENT,
  FILTER_CURRENT,
  CLEAR_FILTER
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    default:
      return state;
  }
};
