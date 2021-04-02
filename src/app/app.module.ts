import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { environment } from 'src/environments/environment';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployerComponent } from './components/employer/employer.component';
import { WorkerComponent } from './components/worker/worker.component';
import { EmployerProfileComponent } from './components/employer-profile/employer-profile.component';
import { WorkerProfileComponent } from './components/worker-profile/worker-profile.component';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { FormsModule } from '@angular/forms';
import { EmployerEffects } from './store/effects/employer.effects';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { WorkerEffects } from './store/effects/worker.effects';
import { EventEffects } from './store/effects/job.effects';
import { UserInfoEffects } from './store/effects/user-info.effects';
import { JobsSignedUpEffects } from './store/effects/job-signed-up.effects';
import { EventsEmployedEffects } from './store/effects/job-employed.effects';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainPageComponent,
    EmployerComponent,
    WorkerComponent,
    EmployerProfileComponent,
    WorkerProfileComponent,
    CreateJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      AuthEffects,
      EmployerEffects,
      EventEffects,
      WorkerEffects,
      UserInfoEffects,
      JobsSignedUpEffects,
      EventsEmployedEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
