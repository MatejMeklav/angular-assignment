import { Component } from '@angular/core';
import { DoctorsListComponent } from '../../components/doctors-list/doctors-list.component';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DoctorsListComponent, TasksListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasks: Task[] = [];

  constructor(private tasksService: TaskService) {
    this.tasksService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }
}
