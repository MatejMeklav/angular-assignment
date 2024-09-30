import { Component } from '@angular/core';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';
import { Task } from '../../models/task.model';
import { TasksCardComponent } from '../tasks-card/tasks-card.component';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [DoctorCardComponent, TasksCardComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  tasks: Task[] = [];

  constructor(private tasksService: TaskService) {
    this.tasksService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }
}
