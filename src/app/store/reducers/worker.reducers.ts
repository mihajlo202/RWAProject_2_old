import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Worker } from "src/app/models/Worker";
import { WorkerActionTypes, WorkerActions } from "../actions/worker.actions";

export interface WorkerState extends EntityState<Worker> {}

export const userAdapter : EntityAdapter<Worker> = createEntityAdapter<Worker>();

export const initialState: WorkerState= userAdapter.getInitialState();


export function workerReducer(state = initialState, action: WorkerActions): WorkerState {
  switch (action.type) {

    case ( WorkerActionTypes.LOAD_ALL_WORKERS_SUCCESS):
      return userAdapter.addMany(action.payload, state);

    case (WorkerActionTypes.REMOVE_SPECIFIC_WORKER):
      return userAdapter.removeOne(action.payload.id, state)

    case (WorkerActionTypes.DELETE_ALL_WORKERS):
      return userAdapter.removeAll(state)

    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = userAdapter.getSelectors();