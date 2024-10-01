import { Component, Input } from '@angular/core';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';
import { Task } from '../../models/task.model';
import { TasksCardComponent } from '../tasks-card/tasks-card.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [DoctorCardComponent, TasksCardComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  @Input() tasks!: Task[];
}
