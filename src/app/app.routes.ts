import { Routes } from '@angular/router';

import { HomeComponent } from './features/doctors/pages/home/home.component';
import { DoctorDetailsComponent } from './features/doctors/pages/doctor-details/doctor-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  {
    path: 'doctor/:id',
    component: DoctorDetailsComponent,
    title: 'Doctor Details Page',
  },
];
