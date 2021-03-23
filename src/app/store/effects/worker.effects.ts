import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { Worker } from "src/app/models/Worker";
import { EmployerService } from "src/app/services/employer.service";
import { AppState } from "..";
import { LoadAllWorkers, WorkerActionTypes } from "../actions/worker.actions";

@Injectable()
export class WorkerEffects {

    getAllUsers=createEffect(() => this.actions$.pipe(
        ofType<LoadAllWorkers>( WorkerActionTypes.LOAD_ALL_WORKERS),
        mergeMap(()=>this.employerService.getAllUsers()
        .pipe(
        map((workers: Worker[])=>({
            type:WorkerActionTypes.LOAD_ALL_WORKERS_SUCCESS,
            payload: workers
        })))
        )
    ))
    
    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private employerService : EmployerService) { }
}