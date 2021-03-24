import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import { WorkerService } from '../../services/worker.service'
import {  mergeMap, map } from 'rxjs/operators';
import { NeedUserInfoAction, UpdateUserInfoAction, UserInfoActionTypes } from '../actions/worker-info.actions'
import { Worker } from 'src/app/models/Worker';

@Injectable()
export class UserInfoEffects {


  getUserById=createEffect(() => this.actions$.pipe(
    ofType<NeedUserInfoAction>( UserInfoActionTypes.NEED_USER_INFO_ACTION),
    map((action)=>action.email),
        mergeMap((email)=>this.workerService.getWorkerByEmail(email).pipe(
            map((user : Worker)=>({
                type:UserInfoActionTypes.GET_USER_INFO_ACTION,
                payload: user
            })))
        )
    ))

    @Effect({dispatch:false})
    updateUser$=this.actions$.pipe(
        ofType<UpdateUserInfoAction>( UserInfoActionTypes.UPDATE_USER_INFO_ACTION),
        map((action) => action.payload),
        mergeMap((user)=>this.workerService.updateWorker(user.id, user)
    ))
  
    constructor(private actions$: Actions,
                private workerService: WorkerService) { }

}