import React, { useReducer } from "react";

let initialState = {
  name: "",
  isLoggedIn: false,
};

function updateUser(state, action) {
  switch (action.details) {
    case "LOG_IN":
      return {
        name: action.payload.username,
        isLoggedIn: true,
      };
    case "LOG_OUT":
      return {
        name: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
export function useAuth() {
  const [userState, dispatch] = useReducer(updateUser, initialState);
  return {dispatch, userState}
}
export const UserContext = React.createContext(null);
