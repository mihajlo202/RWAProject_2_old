import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { JobSignedUp } from "src/app/models/JobSignedUp";
import { JobsEmployedActionTypes, JobsEmployedActions } from "../actions/job-employed.actions";

export const eventsEmployedFeatureKey = 'jobsEmployed';

export interface JobsEmployedState extends EntityState<JobSignedUp> {}

export const adapter : EntityAdapter<JobSignedUp> = createEntityAdapter<JobSignedUp>();

export const initialState: JobsEmployedState = adapter.getInitialState();

export function jobsEmployedReducer(state = initialState, action: JobsEmployedActions): JobsEmployedState {
  switch (action.type) {

    case(JobsEmployedActionTypes.LOAD_ALL_JOBS_EMPLOYED_SUCCESS):
      return adapter.addMany(action.payload, state);

    case(JobsEmployedActionTypes.DELETE_ALL_JOBS_EMPLOYED):
      return adapter.removeAll(state);

    case(JobsEmployedActionTypes.ADD_JOB_EMPLOYED):
      return adapter.addOne(action.payload, state);

    case(JobsEmployedActionTypes.DELETE_ONE_JOB_EMPLOYED):
      return adapter.removeOne(action.payload.id, state);

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