import { Action } from "@ngrx/store";
import { JobSignedUp } from "src/app/models/JobSignedUp";

export enum JobsSignedUpActionTypes {
    LOAD_JOBS_SIGNED_UP = '[JobSignedUp] Load JobsSignedUp',
    LOAD_JOBS_SIGNED_UP_SUCCESS = '[JobSignedUp] Load JobsSignedUp Success',
    LOAD_JOBS_SIGNED_UP_FOR_USER = '[JobSignedUp] Load JobsSignedUp For User',
    LOAD_JOBS_SIGNED_UP_FOR_USER_SUCCESS = '[JobSignedUp] Load JobsSignedUp For User Success',
    DELETE_ALL_JOBS_SIGNED_UP='[JobSignedUp] Delete All JobsSignedUp',
    ADD_JOB_SIGNED_UP='[JobSignedUp] Add JobSignedUp',
    ADD_JOB_SIGNED_UP_SUCCESS='[JobSignedUp] Add JobSignedUp Success',
    DELETE_ONE_JOB_SIGNED_UP='[JobSignedUp] Delete One JobSignedUp',
  }
  
  export class LoadJobsSignedUp implements Action {
    readonly type = JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP;
    constructor() {}
  }
  
  export class LoadJobsSignedUpSuccess implements Action {
    readonly type = JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_SUCCESS;
    constructor(public payload: JobSignedUp[]) {}
  }
  
  export class LoadJobsSignedUpForUser implements Action {
    readonly type = JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_FOR_USER;
    constructor(public idUser: number) {}
  }
  
  export class LoadJobsSignedUpForUserSuccess implements Action {
    readonly type = JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_FOR_USER_SUCCESS;
    constructor(public payload: JobSignedUp[]) {}
  }
  
  export class DeleteAllJobsSignedUp implements Action {
    readonly type = JobsSignedUpActionTypes.DELETE_ALL_JOBS_SIGNED_UP;
    constructor() {}
  }
  
  export class AddJobSignedUp implements Action {
    readonly type = JobsSignedUpActionTypes.ADD_JOB_SIGNED_UP;
    constructor(public payload: JobSignedUp ) { }
  }
  
  export class AddJobSignedUpSuccess implements Action {
    readonly type = JobsSignedUpActionTypes.ADD_JOB_SIGNED_UP_SUCCESS;
    constructor(public payload : JobSignedUp ){}
  }
  
  export class DeleteOneJobSignedUp implements Action {
    readonly type = JobsSignedUpActionTypes.DELETE_ONE_JOB_SIGNED_UP;
    constructor(public idObject: number) {}
  }
  
  
  export type JobsSignedUpActions = LoadJobsSignedUp
  | LoadJobsSignedUpSuccess 
  | LoadJobsSignedUpForUser
  | LoadJobsSignedUpForUserSuccess
  | DeleteAllJobsSignedUp
  | AddJobSignedUp
  | AddJobSignedUpSuccess
  | DeleteOneJobSignedUp;