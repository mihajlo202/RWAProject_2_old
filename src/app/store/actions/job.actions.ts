import { Action } from "@ngrx/store";
import { Job } from "src/app/models/Job";

export enum JobActionTypes {
    LOAD_ALL_JOBS = '[Job] LOAD_ALL_JOBS',
    LOAD_ALL_JOBS_SUCCESS = '[Job] LOAD_ALL_JOBS_SUCCESS',
    LOAD_EMPLOYERS_JOBS = '[Job] LOAD_EMPLOYERS_JOBS',
    LOAD_EMPLOYERS_JOBS_SUCCESS = '[Job] LOAD_EMPLOYERS_JOBS_SUCCESS',
    NEW_JOB = '[Job] NEW_JOB',
    NEW_JOB_SUCCESS = '[Job] NEW_JOB_SUCCESS',
    UPDATE_JOB = '[Job] UPDATE_JOB',
    DELETE_JOB = '[Job] DELETE_JOB',
    DELETE_ALL_JOBS ='[Job] DELETE_ALL_JOBS',
  }
  
  export class LoadAllJobs implements Action {
    readonly type = JobActionTypes.LOAD_ALL_JOBS;
    constructor() {}
  }
  export class LoadAllJobsSuccess implements Action {
    readonly type = JobActionTypes.LOAD_ALL_JOBS_SUCCESS;
    constructor(public payload: Job[]) {}
  }
  
  export class LoadEmployersJobs implements Action {
    readonly type = JobActionTypes.LOAD_EMPLOYERS_JOBS;
    constructor(public employerId : number) {}
  }
  
  export class LoadEmployersJobsSuccess implements Action {
    readonly type = JobActionTypes.LOAD_EMPLOYERS_JOBS_SUCCESS;
    constructor(public payload: Job[] ) {}
  }
  
  export class NewJob implements Action {
    readonly type = JobActionTypes.NEW_JOB;
    constructor(public payload: Job) {}
  }
  
  export class NewJobSuccess implements Action {
    readonly type = JobActionTypes.NEW_JOB_SUCCESS;
    constructor(public payload: Job) {}
  }
  
  export class UpdateJob implements Action {
    readonly type = JobActionTypes.UPDATE_JOB;
  
    constructor(public payload: Job) {}
  }
  
  export class DeleteJob implements Action {
    readonly type = JobActionTypes.DELETE_JOB;
    constructor(public payload : Job) {}
  }
  
  export class DeleteAllJobs implements Action {
    readonly type = JobActionTypes.DELETE_ALL_JOBS;
    constructor(){}
  }
  
  
  
  export type JobActions = LoadEmployersJobs 
  | LoadAllJobs
  | LoadAllJobsSuccess
  | LoadEmployersJobsSuccess
  | NewJob 
  | NewJobSuccess
  | UpdateJob 
  | DeleteJob
  | DeleteAllJobs;