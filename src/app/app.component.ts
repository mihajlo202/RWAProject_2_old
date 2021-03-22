import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { NavService } from './services/nav.service';
import { AppState } from './store';
import { LogOut } from './store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JobApp';
  showNavButtons: boolean;
  // user$=this.store.pipe(
  //     select(null),//selectedLoggedUser
  //     filter(val => val !== undefined)
  //   );
  constructor(private showNavService: NavService,
    //private store: Store<AppState>,
    private router: Router) {}

ngOnInit(){
  this.showNavService.flagCurrent.subscribe(flag => this.showNavButtons=flag);
}

logoutClicked(){
    //this.store.dispatch(new LogOut());
    this.showNavService.changeFlag(false);
    this.router.navigate([`./mainPage`]);
}

// pocetnaClicked(){
//   this.user$.subscribe(
//   user=>{
//     if(user.role==="employer"){
//       this.router.navigate(['/employer/main'])
//       }
//       else{
//         this.router.navigate(['/worker/main'])
//       }
//   })
// }

// profilClicked(){
//   this.user$.subscribe(
//   user=>{
//     if(user.role==="reziser"){
//       this.router.navigate(['/employer/profile'])
//     }
//     else{
//       this.router.navigate(['/employer/profile'])
//     }
//     })
//   }
}