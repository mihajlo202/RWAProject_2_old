import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import { JobsEmployedActionTypes, LoadAllJobsEmployed} from '../actions/job-employed.actions'
import { WorkerService } from "src/app/services/worker.service";

@Injectable()
export class EventsEmployedEffects {

    getAllJobsSignedUp=createEffect(()=> this.actions$.pipe(
        ofType<LoadAllJobsEmployed>(JobsEmployedActionTypes.LOAD_ALL_JOBS_EMPLOYED),
        mergeMap(()=>this.workerService.getAllJobsEmployed().pipe(
        map((events)=>({
            type:JobsEmployedActionTypes.LOAD_ALL_JOBS_EMPLOYED_SUCCESS,
            payload: events
        })))
    )))

    constructor(private actions$: Actions,
        private workerService: WorkerService) { }
}