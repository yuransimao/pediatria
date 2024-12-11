
import { UserState} from "./initialstate"
export type UserAction =
  | { type: 'User_Active'; payload: { id: string; name: string; email: string; admin: boolean } }
  | { type: 'User_Desactive' };
export const userReducer = (state : UserState, action: UserAction) : UserState =>{

    switch(action.type){

        case "User_Active":{
            return {
                ...state,
                user_id: action.payload.id,
                user_name: action.payload.name,
                user_email: action.payload.email,
                user_admin: action.payload.admin,
              };
        }

        case "User_Desactive":{
            return {
                user_id: null,
                user_name: null,
                user_email: null,
                user_admin: false,
              };
        }

    }

}