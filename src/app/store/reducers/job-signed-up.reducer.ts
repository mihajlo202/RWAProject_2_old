
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { JobSignedUp } from 'src/app/models/JobSignedUp';
import { JobsSignedUpActionTypes, JobsSignedUpActions } from '../actions/job-sign-up.actions';


export const eventsSignedUpFeatureKey = 'jobSignedUp';

export interface JobsSignedUpState extends EntityState<JobSignedUp> {}

export const adapter : EntityAdapter<JobSignedUp> = createEntityAdapter<JobSignedUp>();

export const initialState: JobsSignedUpState= adapter.getInitialState();


export function jobsSignedUpReducer(state = initialState, action: JobsSignedUpActions): JobsSignedUpState {
  switch (action.type) {

    case(JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_SUCCESS):
      return adapter.addMany(action.payload, state);

    case(JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_FOR_USER_SUCCESS):
      return adapter.addMany(action.payload, state);

    case (JobsSignedUpActionTypes.DELETE_ALL_JOBS_SIGNED_UP):
      return adapter.removeAll(state);

    case (JobsSignedUpActionTypes.ADD_JOB_SIGNED_UP_SUCCESS):
      return adapter.addOne( action.payload , state);

    case (JobsSignedUpActionTypes.DELETE_ONE_JOB_SIGNED_UP):
      return adapter.removeOne(action.idObject , state);

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