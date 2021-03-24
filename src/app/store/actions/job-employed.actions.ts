import { Action } from '@ngrx/store';
import { JobSignedUp } from 'src/app/models/JobSignedUp';
import { LoadJobsSignedUpSuccess } from './job-sign-up.actions';

export enum JobsEmployedActionTypes {
  LOAD_ALL_JOBS_EMPLOYED = '[JobsEmployed] Load All JobsEmployed',
  LOAD_ALL_JOBS_EMPLOYED_SUCCESS = '[JobsEmployed] Load All JobsEmployed Success',
  DELETE_ALL_JOBS_EMPLOYED='[JobsEmployed] Delete All JobsEmployed',
  ADD_JOB_EMPLOYED='[JobsEmployed] Add  One JobsEmployed',
  ADD_JOB_EMPLOYED_SUCCESS='[JobsEmployed] Add One JobsEmployedSuccess',
  DELETE_ONE_JOB_EMPLOYED='[JobsEmployed] Delete One JobsEmployed',
}

export class LoadAllJobsEmployed implements Action {
  readonly type = JobsEmployedActionTypes.LOAD_ALL_JOBS_EMPLOYED;
  constructor(){}
}

export class LoadAllJobsEmployedSuccess implements Action {
  readonly type = JobsEmployedActionTypes.LOAD_ALL_JOBS_EMPLOYED_SUCCESS;
  constructor(public payload: JobSignedUp[]) {}
}

export class DeleteAllJobsEmployed implements Action {
  readonly type = JobsEmployedActionTypes.DELETE_ALL_JOBS_EMPLOYED;
  constructor() {}
}

export class AddJobEmployed implements Action {
  readonly type = JobsEmployedActionTypes.ADD_JOB_EMPLOYED;
  constructor(public payload: JobSignedUp) {}
}

export class AddJobEmployedSuccess implements Action {
  readonly type = JobsEmployedActionTypes.ADD_JOB_EMPLOYED_SUCCESS;
  constructor(public payload: JobSignedUp) {}
}

export class DeleteOneJobEmployed implements Action {
  readonly type = JobsEmployedActionTypes.DELETE_ONE_JOB_EMPLOYED;
  constructor(public payload: JobSignedUp) {}
}

export type JobsEmployedActions = LoadAllJobsEmployed
| LoadAllJobsEmployedSuccess
| DeleteAllJobsEmployed
| AddJobEmployed
| AddJobEmployedSuccess
| DeleteOneJobEmployed;