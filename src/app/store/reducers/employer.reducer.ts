import { Action, createSelector } from '@ngrx/store';
import { EmployerActionTypes, EmployerActions } from '../actions/employer.actions';
import { Employer } from 'src/app/models/Employer';


export const employerFeatureKey = 'employer';

export interface EmployerState {
  employer: Employer
}

export const initialState: EmployerState = {
  employer: undefined
};

export function employerReducer(state = initialState, action: EmployerActions): EmployerState {
  switch (action.type) {

    case(EmployerActionTypes.GET_INFO_ACTION):
    return {
      employer: action.employer
    };

    case(EmployerActionTypes.DELETE_INFO_ACTION):
    return {
      employer: undefined
    };

    default:
      return state;
  }
}
