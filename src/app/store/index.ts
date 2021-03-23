import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { authReducer, AuthState } from "./reducers/auth.reducer";
import { employerReducer, EmployerState } from "./reducers/employer.reducer";
import { jobReducer, JobState } from "./reducers/job.reducers";
import { workerReducer, WorkerState } from "./reducers/worker.reducers";


export interface AppState {
    auth: AuthState,
    employer: EmployerState,
//    userInfo: UserInfoState,
    jobs: JobState,
//    eventToUpdate: EventToUpdateState,
    worker: WorkerState,
//    eventsSignedUp: EventsSignedUpState,
//    eventsEmployed: EventsEmployedState
}

export const reducers : ActionReducerMap<AppState> = {
    auth: authReducer,
    employer: employerReducer,
//    userInfo: userInfoReducer,
    jobs: jobReducer,
//    eventToUpdate: eventToUpdateReducer,
    worker: workerReducer,
//    eventsSignedUp: eventsSignedUpReducer,
//    eventsEmployed: eventsEmployedReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
