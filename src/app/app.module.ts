import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { environment } from 'src/environments/environment';
import { StoreDevtools } from '@ngrx/store-devtools';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployerComponent } from './components/employer/employer.component';
import { WorkerComponent } from './components/worker/worker.component';
import { EmployerProfileComponent } from './components/employer-profile/employer-profile.component';
import { WorkerProfileComponent } from './components/worker-profile/worker-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainPageComponent,
    EmployerComponent,
    WorkerComponent,
    EmployerProfileComponent,
    WorkerProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
