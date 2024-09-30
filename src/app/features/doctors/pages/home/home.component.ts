import { Component } from '@angular/core';
import { DoctorsListComponent } from '../../components/doctors-list/doctors-list.component';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DoctorsListComponent, TasksListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
