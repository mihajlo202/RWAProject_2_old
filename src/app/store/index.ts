import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { authReducer, AuthState } from "./reducers/auth.reducer";


export interface AppState {
    auth: AuthState
}

export const reducers : ActionReducerMap<AppState> = {
    auth: authReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
