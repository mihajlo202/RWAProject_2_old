import { UserInfoActions, UserInfoActionTypes } from '../actions/worker-info.actions';
import { Worker } from '../../models/Worker'
export const userInfoFeatureKey = 'userInfo';

export interface UserInfoState {
  userInfo: Worker
}

export const initialState: UserInfoState = {
  userInfo: undefined
};

export function userInfoReducer(state = initialState, action: UserInfoActions): UserInfoState {
  switch (action.type) {

    case(UserInfoActionTypes.GET_USER_INFO_ACTION):
    return {
      userInfo: action.payload
    }

    case(UserInfoActionTypes.DELETE_USER_INFO_ACTION):
    return{
      userInfo: undefined
    }

    case(UserInfoActionTypes.UPDATE_USER_INFO_ACTION):
    return{
      userInfo: action.payload
    }


    default:
      return state;
  }
}
