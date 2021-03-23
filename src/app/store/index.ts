import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { authReducer, AuthState } from "./reducers/auth.reducer";
import { employerReducer, EmployerState } from "./reducers/employer.reducer";


export interface AppState {
    auth: AuthState,
    employer: EmployerState
}

export const reducers : ActionReducerMap<AppState> = {
    auth: authReducer,
    employer: employerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
