import { Action } from '@ngrx/store';
import { LoggedUser } from '../../models/LoggedUser';

export enum AuthActionTypes {
    LoginAction = '[Login] Action',
    LogoutAction =  '[Logout] Action'
}

export class LogIn implements Action {
    readonly type = AuthActionTypes.LoginAction;

    constructor(public payload: {user: LoggedUser}) {}
}

export class LogOut implements Action {
    readonly type = AuthActionTypes.LogoutAction;

    constructor() {}
}

export type AuthActions = LogIn | LogOut;