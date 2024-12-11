
export interface UserState {
    user_id: string | null;
    user_name: string | null;
    user_email: string | null;
    user_admin: boolean;
  }
export const IntialState: UserState ={
    user_id :null,
    user_name: null,
    user_email: null,
    user_admin: false,
}