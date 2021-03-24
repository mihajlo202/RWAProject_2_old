import { Action } from '@ngrx/store';
import { Job } from 'src/app/models/Job';

export enum JobToUpdateTypes {
  SET_JOB_TO_UPDATE = '[Job] Set job to update',
  DELETE_JOB_TO_UPDATE ='[Job] Delete job to update'
}

export class JobToUpdate implements Action {
  readonly type = JobToUpdateTypes.SET_JOB_TO_UPDATE;

  constructor(public payload: Job) {}
}

export class DeleteJobToUpdate implements Action {
  readonly type = JobToUpdateTypes.DELETE_JOB_TO_UPDATE;
}

export type JobToUpdateActions = JobToUpdate | DeleteJobToUpdate;
