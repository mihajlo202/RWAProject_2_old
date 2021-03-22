import { LoggedUser } from "src/app/models/LoggedUser";
import { AuthActions, AuthActionTypes } from "../actions/auth.actions";

export const authFeatureKey = 'auth'

export interface AuthState {
    loggedIn: boolean,
    user: LoggedUser
}

export const initialState: AuthState = {
    loggedIn: false,
    user: undefined
}

export function authReducer(state = initialState, action: AuthActions) {
    switch(action.type) {
        case AuthActionTypes.LoginAction:
            return {
                loggeIn: true,
                user: action.payload.user
            };
        case AuthActionTypes.LogoutAction:
            return {
                logedIn: false,
                user: undefined
            };
        default:
            return state;
    }
}