import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { EmployerService } from "src/app/services/employer.service";
import { WorkerService } from "src/app/services/worker.service";
import { JobActionTypes, LoadAllJobs, LoadEmployersJobs, NewJob, UpdateJob } from "../actions/job.actions";

@Injectable()
export class EventEffects {

    getAllJobs=createEffect(()=> this.actions$.pipe(
        ofType<LoadAllJobs>(JobActionTypes.LOAD_ALL_JOBS),
        mergeMap(()=>this.workerService.getAllJobs().pipe(
        map((events)=>({
            type:JobActionTypes.LOAD_ALL_JOBS_SUCCESS,
            payload: events
        })))
    )))

    getEmployerJobs=createEffect(() => this.actions$.pipe(
        ofType<LoadEmployersJobs>( JobActionTypes.LOAD_EMPLOYERS_JOBS),
        map((action) => action.employerId),
            mergeMap((employerId)=>this.employerService.getEventsByEmployerId(employerId)
            .pipe(
            map((events)=>({
                type:JobActionTypes.LOAD_EMPLOYERS_JOBS_SUCCESS,
                payload: events
            })))
        )
    ))

    addNewJob=createEffect(() => this.actions$.pipe(
        ofType<NewJob>( JobActionTypes.NEW_JOB),
        map((action) => action.payload),
            mergeMap((event)=>this.employerService.postEvent(event)
            .pipe(
            map((event)=>({
                type:JobActionTypes.NEW_JOB_SUCCESS,
                payload: event
            })))
        )
    ))

    updateJob= createEffect(() => this.actions$.pipe(
        ofType<UpdateJob>( JobActionTypes.UPDATE_JOB),
        mergeMap((job)=>this.employerService.updateJob(job.payload.id, job.payload)
        .pipe(
        map((event)=>({
            type:EventToUpdateTypes.DELETE_EVENT_TO_UPDATE,
        })))
    )))

    @Effect({dispatch:false})
    deleteOneEvent = this.actions$.pipe(
        ofType<DeleteEvent>(EventActionTypes.DELETE_EVENT),
        tap(action => this.directorService.deleteEvent(action.payload.id)
        .subscribe(
            noop,
            err => alert("Doslo je do greske pri brisanju eventa iz baze!")
        ))
    );


    constructor(private actions$: Actions,
                private employerService : EmployerService,
                private workerService: WorkerService
                ) { }

}