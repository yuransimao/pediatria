import React,{ useReducer} from 'react'
import { userContext } from './userContext'
import { userReducer } from './userReducer';
import { IntialState } from './initialstate';

interface UserProviderType {
  children: React.ReactNode;
}

function UserProvider({ children }: UserProviderType) {
  const [state, dispatch] = useReducer(userReducer, IntialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export { UserProvider };