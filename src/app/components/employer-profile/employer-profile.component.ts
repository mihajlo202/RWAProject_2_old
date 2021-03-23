import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Employer } from 'src/app/models/Employer';
import { Job } from 'src/app/models/Job';
import { JobSignedUp } from 'src/app/models/JobEmployed';
import { AppState } from 'src/app/store';
import { selectEmployerInfo } from 'src/app/store/selectors/employer.selectors';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {
  allUsers: Worker[]=[];
  signedUsers: Worker[]=[];
  objectSignedEvents: JobSignedUp[]=[];
  idsSignedUsers: number[]=[];
  idEvent:number;

  displayEventModal:boolean;
  allEvents: Job[] = [];
  isUpdating: boolean;
  employer: Employer={
    id: undefined,
    name: '',
    surname: '',
    email: '',
    company: ''
  }

  employer$=this.store.pipe(
    select(selectEmployerInfo),
    filter(val => val !== undefined)
  );

  // allUsers$=this.store.pipe(
  //   select(selectAllUsers),
  //   filter(val => val !== undefined)
  // )

  // eventsSignedUp$=this.store.pipe(
  //   select(selectAllEventsSigned),
  //   filter(val => val !== undefined)
  // );
  
  constructor(private store: Store<AppState>) { 
    this.displayEventModal=false;
    this.isUpdating=false;
  }

  ngOnInit(): void {
    this.employer$.subscribe( (employer: Employer) => this.employer={...employer})
    // this.store.select(selectAllEvents).subscribe((response) => {
    //   this.allEvents = response as Event[]
    // });
    
    // this.allUsers$.subscribe( users =>{
    //   users.forEach(user => this.allUsers.push(user))
    // })
 
  //   this.eventsSignedUp$.subscribe((events) =>{
  //       events.forEach(eventSigned =>{
  //         this.objectSignedEvents.push(eventSigned)
  //       })
  //   })
  }

  createNewJobClicked(){
    this.displayEventModal=true;
    this.isUpdating=false;
  }

  hideJobModal(){
    this.displayEventModal=false;
  }

  onUpdateClick(event : Event){
    this.displayEventModal=true;
    this.isUpdating=true;
    //this.store.dispatch(new EventToUpdate(event));
  }

  onDeleteClick(event: Event){
    //this.store.dispatch( new DeleteEvent(event));
  }

  // showSignedWorkers(event : Event){
  //   this.idEvent=event.id;
  //   this.signedUsers=[];
  //   this.idsSignedUsers=[];

  //   this.objectSignedEvents.forEach(object => {
  //     if(object.event===this.idEvent)
  //       this.idsSignedUsers.push(object.user)
  //   });

  //   if(this.idsSignedUsers.length){
  //     this.allUsers.forEach(user=>{
  //       this.idsSignedUsers.forEach(userId=>{
  //         if(user.id===userId)
  //           this.signedUsers.push(user);
  //       })
  //     })
  //   }
  //   else alert("Na ovom oglasu još uvek nema prijavljenih korisnika!")
  // }
  
  closeSignedUsers(){
    this.signedUsers=[];
    this.idsSignedUsers=[];
  }
}