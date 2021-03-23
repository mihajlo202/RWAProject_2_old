import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { NeedEmployerInfo } from 'src/app/store/actions/employer.actions';
import { selectedLoggedUser } from 'src/app/store/selectors/auth.selectors';
import { selectEmployerInfo } from 'src/app/store/selectors/employer.selectors';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  user$=this.store.pipe(
    select(selectedLoggedUser),
    filter(val => val !== undefined)
  );

  director$=this.store.pipe(
    select(selectEmployerInfo),
    filter(val => val !== undefined)
  );
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => this.store.dispatch(new NeedEmployerInfo(user.email))
    )
    // this.director$.subscribe( director =>{
    //   this.store.dispatch(new LoadDirectorsEvents(director.id))
    // })
    // this.store.dispatch(new LoadAllUsers());
    // this.store.dispatch(new LoadEventsSignedUp);
    // this.store.dispatch(new LoadAllEventsEmployed)
  }

}
