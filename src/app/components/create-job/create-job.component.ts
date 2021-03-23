import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as EventEmitter from 'node:events';
import { Job } from 'src/app/models/Job';
import { AppState } from 'src/app/store';
import { selectEmployerId } from 'src/app/store/selectors/employer.selectors';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  job: Job = {
    id: undefined,
    name: '',
    description: '',
    type: '',
    userCount: null,
    employerId: null
  };

  directorId$=this.store.select(selectEmployerId);

  @Output() cancelClicked: EventEmitter =
  new EventEmitter();
  @Input() isUpdating: boolean;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select( state => state.eventToUpdate.event)
    // .subscribe(event => this.event={...event});
  }
  
  cancelModal(): void {
    this.cancelClicked.emit(null);
  }

  handleClick(): void {
    if(this.isUpdating){
      //this.store.dispatch( new UpdateEvent(this.event))
    }
    else
    {
      // this.directorId$.subscribe(id =>{
      //     this.job.employerId=id;
      //     this.store.dispatch(new NewEvent(this.event))
      //   })
    }
    this.cancelModal();
  }
 
}

