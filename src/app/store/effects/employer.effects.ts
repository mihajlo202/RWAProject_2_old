import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { EmployerService } from "src/app/services/employer.service";
import { AppState } from "..";
import { EmployerActionTypes, NeedEmployerInfo } from "../actions/employer.actions";

@Injectable()
export class EmployerEffects {
  getUserById=createEffect(() => this.actions$.pipe(
    ofType<NeedEmployerInfo>( EmployerActionTypes.NEED_INFO_ACTION),
    map((action)=>action.email),
        mergeMap((email)=>this.directorService.getDirectorByEmail(email)
        .pipe(
            map((user)=>({
                type:EmployerActionTypes.GET_INFO_ACTION,
                director:user[0]
            })))
        )
    ))
  
    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private directorService: EmployerService) { }

}