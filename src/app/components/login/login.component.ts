import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/store';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : FormControl= new FormControl('', [Validators.required, Validators.email]);
  password : FormControl= new FormControl('', [Validators.required]);
  errorMsg="";
  constructor(private authService:AuthService,
              private router: Router,
              //private store: Store<AppState>
              ) { }

  ngOnInit(): void {
  }

  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();

  cancelLogIn(): void {
    this.cancelClicked.emit();
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Morate uneti vrednost';
    }
    return this.email.hasError('email') ? 'Nevalidan email' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Morate uneti vrednost';
    }
  }

  btnLoginClicked(){
   
    const provera=this.checkInput(this.email.value, this.password.value);
    if(provera){
      this.authService.checkIfUserValid(this.email.value, this.password.value)
      .pipe( 
        map(array=> array[0])
      ).subscribe(value=>{
        if(value!=undefined){
          this.errorMsg="";
          //this.store.dispatch(new LogIn({user : value }));
          this.router.navigate([`./${value.role}`]);
          //this.showNavService.changeFlag(true);
        }
        else{
          this.errorMsg="Pogrešan email ili password!"
        }
      })
    }
    else{
      this.errorMsg="Morate uneti sva input polja!";
    }
  }

  checkInput(email,password):boolean{
    if((password === '' || password == null || password === undefined ) || 
        (email === '' || email == null || email === undefined))
        return false;
    else return true;
  }
}
