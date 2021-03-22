import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerProfileComponent } from './components/employer-profile/employer-profile.component';
import { EmployerComponent } from './components/employer/employer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { WorkerProfileComponent } from './components/worker-profile/worker-profile.component';
import { WorkerComponent } from './components/worker/worker.component';

const routes: Routes = [
  {path: '', redirectTo: '/mainPage', pathMatch: 'full'},
  {path: 'mainPage', component: MainPageComponent},
  {
    path: 'employer',
    component: EmployerComponent,
    //canActivate:[AuthRoleGuard],
    children: [
      {path: '', component: EmployerProfileComponent },
      {path: 'profil', component: EmployerProfileComponent}//,
      //{path: 'pocetna', component: SearchUsersComponent}
    ],
    data: { role: 'employer'}
  },
  {
    path: 'worker',
    component: WorkerComponent,
    children: [
      {path: '', component: WorkerProfileComponent },
      {path: 'profil', component: WorkerProfileComponent}//,
      //{path: 'pocetna', component: SearchEventsComponent}
    ],
    //canActivate:[AuthRoleGuard],
    data: { role: 'worker'}
  },
  {path: '**', redirectTo: 'mainPage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
