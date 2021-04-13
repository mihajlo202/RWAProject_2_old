import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Job } from "src/app/models/Job";
import { JobActions, JobActionTypes } from "../actions/job.actions";

export interface JobState extends EntityState<Job> {}

export const adapter : EntityAdapter<Job> = createEntityAdapter<Job>();

export const initialState: JobState= adapter.getInitialState();

export function jobReducer(state = initialState, action: JobActions): JobState {
  switch (action.type) {

    case JobActionTypes.LOAD_ALL_JOBS_SUCCESS:
      return adapter.addMany( action.payload, state );

    case JobActionTypes.LOAD_EMPLOYERS_JOBS_SUCCESS:
      return adapter.addMany( action.payload, state );

    case JobActionTypes.NEW_JOB_SUCCESS:
      return adapter.addOne(action.payload, state);

    case JobActionTypes.DELETE_JOB:
      return adapter.removeOne(action.payload.id, state);

    case JobActionTypes.DELETE_ALL_JOBS:
      return adapter.removeAll(state);

    case JobActionTypes.UPDATE_JOB: {
        const { id, ...changes } = action.payload;
        return adapter.updateOne({ id, changes: { ...changes } }, state);
      } 
    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapter.getSelectors();