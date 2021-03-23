import { Action, createAction, props } from '@ngrx/store';
import { Employer } from '../../models/Employer'

export enum EmployerActionTypes {
    NEED_INFO_ACTION = '[Employer Profile Page] Requesting User Info',
    GET_INFO_ACTION ='[Employer Profile Page] Getting User Info',
    DELETE_INFO_ACTION ='[Employer Logged Out]'
}


export class NeedEmployerInfo implements Action {
    readonly type = EmployerActionTypes.NEED_INFO_ACTION;
    constructor(public email:string){}
}

export class GetEmployerInfo implements Action {
    readonly type = EmployerActionTypes.GET_INFO_ACTION;
    constructor(public employer: Employer){}
}

export class DeleteEmployerInfo implements Action {
    readonly type = EmployerActionTypes.DELETE_INFO_ACTION;
    constructor () {}
}


export type EmployerActions = NeedEmployerInfo | GetEmployerInfo | DeleteEmployerInfo;