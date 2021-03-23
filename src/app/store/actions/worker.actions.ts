import { Action } from "@ngrx/store";
import { Worker } from "src/app/models/Worker";

export enum WorkerActionTypes {
    LOAD_ALL_WORKERS = '[User] Load All Workers',
    LOAD_ALL_WORKERS_SUCCESS = '[User] Load All Workers Success',
    REMOVE_SPECIFIC_WORKER='[User] Remove Spec Worker',
    DELETE_ALL_WORKERS = '[User] Delete All Workers'
  }
  
  export class LoadAllWorkers implements Action {
    readonly type = WorkerActionTypes.LOAD_ALL_WORKERS;
    constructor() {}
  }
  
  export class LoadAllWorkersSucces implements Action {
    readonly type = WorkerActionTypes.LOAD_ALL_WORKERS_SUCCESS;
    constructor( public payload: Worker[]) {}
  }
  
  export class RemoveSpecificWorker implements Action {
    readonly type = WorkerActionTypes.REMOVE_SPECIFIC_WORKER;
    constructor(public payload: Worker) {}
  }
  
  export class DeleteAllWorkers implements Action {
    readonly type = WorkerActionTypes.DELETE_ALL_WORKERS;
    constructor() {}
  }
  
  
  export type WorkerActions = LoadAllWorkers 
  | LoadAllWorkersSucces 
  | RemoveSpecificWorker
  | DeleteAllWorkers;