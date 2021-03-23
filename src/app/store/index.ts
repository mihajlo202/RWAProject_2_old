import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { authReducer, AuthState } from "./reducers/auth.reducer";
import { employerReducer, EmployerState } from "./reducers/employer.reducer";
import { jobReducer, JobState } from "./reducers/job.reducers";


export interface AppState {
    auth: AuthState,
    employer: EmployerState,
//    userInfo: UserInfoState,
    jobs: JobState,
//    eventToUpdate: EventToUpdateState,
//    users: UserState,
//    eventsSignedUp: EventsSignedUpState,
//    eventsEmployed: EventsEmployedState
}

export const reducers : ActionReducerMap<AppState> = {
    auth: authReducer,
    employer: employerReducer,
//    userInfo: userInfoReducer,
    jobs: jobReducer,
//    eventToUpdate: eventToUpdateReducer,
//    users: userReducer,
//    eventsSignedUp: eventsSignedUpReducer,
//    eventsEmployed: eventsEmployedReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
