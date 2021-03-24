import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import { WorkerService } from 'src/app/services/worker.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { JobsSignedUpActionTypes, LoadJobsSignedUp, LoadJobsSignedUpForUser, AddJobSignedUp, DeleteOneJobSignedUp} from '../actions/job-sign-up.actions';
import { noop } from 'rxjs';

@Injectable()
export class JobsSignedUpEffects {

    getAllJobsSignedUp=createEffect(()=> this.actions$.pipe(
        ofType<LoadJobsSignedUp>(JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP),
        mergeMap(()=>this.workerService.getAllJobSigned().pipe(
        map((events)=>({
            type:JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_SUCCESS,
            payload: events
        })))
    )))

    getAllJobsSignedUpForUser=createEffect(()=> this.actions$.pipe(
        ofType<LoadJobsSignedUpForUser>(JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_FOR_USER),
        map(action => action.idUser),
        mergeMap((idUser)=>this.workerService.getAllJobSignedForWorker(idUser).pipe(
        map((events)=>({
            type:JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_FOR_USER_SUCCESS,
            payload: events
        })))
    )))

    addJobsSignedUp=createEffect(()=> this.actions$.pipe(
        ofType<AddJobSignedUp>(JobsSignedUpActionTypes.ADD_JOB_SIGNED_UP),
        map(action => action.payload),
            mergeMap((event)=>this.workerService.postJobSigned(event).pipe(
            map((events)=>({
                type:JobsSignedUpActionTypes.ADD_JOB_SIGNED_UP_SUCCESS,
                payload: events
            })))
    )))

    @Effect({dispatch:false})
    deleteOneEvent = this.actions$.pipe(
        ofType<DeleteOneJobSignedUp>(JobsSignedUpActionTypes.DELETE_ONE_JOB_SIGNED_UP),
        tap(action => this.workerService.deletJobSigned(action.idObject)
        .subscribe(
            noop,
            err => alert("Doslo je do greske pri brisanju posla iz baze!")
        ))
    );

    constructor(private actions$: Actions,
        private workerService: WorkerService) { }
}