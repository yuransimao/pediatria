import {createContext} from "react";
import {UserAction} from "./userReducer"

import { UserState } from './initialstate';

export interface UserContextType {
  state: UserState; 
  dispatch: React.Dispatch<UserAction>; 
}
export const userContext = createContext<UserContextType | undefined>(undefined);