import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { defer, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { NavService } from "src/app/services/nav.service";
import { AuthActionTypes, LogIn, LogOut } from "../actions/auth.actions";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private navService: NavService
    ) {}


    @Effect({dispatch:false})
  login$ = this.actions$.pipe(
    ofType<LogIn>(AuthActionTypes.LoginAction),
    tap(action => localStorage.setItem("user", JSON.stringify(action.payload.user)))
  );

  logout$ = createEffect(() => this.actions$.pipe(
    ofType<LogOut>(AuthActionTypes.LogoutAction),
    switchMap(()=> [
      //new DeleteAllEvents(),
      //new DeleteDirectorInfo(),
      //new DeleteUserInfoAction(),
      //new DeleteAllUsers(),
      //new DeleteAllEventsEmployed(),
      //new DeleteAllEventsSignedUp()
    ]),
    tap(() => {
      localStorage.removeItem("user");
      this.router.navigateByUrl('/login');
    }))
  );

    @Effect()
  init$ = defer(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.navService.changeFlag(true);
      return of(new LogIn({user:JSON.parse(userData)}));
    }
    else {
      this.navService.changeFlag(false);
      return <any>of(new LogOut());
    }
  });
}