import { Job } from "src/app/models/Job";
import { JobToUpdateActions, JobToUpdateTypes } from "../actions/job-update.actions";

  
  export interface JobToUpdateState {
    job: Job;
  }
  
  export const initialState: JobToUpdateState = {
    job: undefined
  }
  
  export function jobToUpdateReducer( state = initialState, action: JobToUpdateActions): JobToUpdateState
  {
    switch (action.type) {
      case JobToUpdateTypes.SET_JOB_TO_UPDATE:
        return {
          job: action.payload
        }
      case JobToUpdateTypes.DELETE_JOB_TO_UPDATE:
        return {
          job: undefined
        }
      default:
        return state;
    }
  }
  