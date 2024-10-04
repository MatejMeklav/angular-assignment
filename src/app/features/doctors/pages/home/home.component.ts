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
  isLoading = false;
  tasksDisplayed = 9;
  tasksLength = 0;
  isShowMore = true;

  changeTasksDisplayed(val: number) {
    this.tasksDisplayed = val;
  }

  constructor(private tasksService: TaskService) {
    this.isLoading = true;
    this.tasksService.tasksObs$.subscribe({
      next: data => {
        this.tasksLength = data.length;
        this.tasks = data.slice(0, this.tasksDisplayed);
        this.isShowMore = this.tasksDisplayed <= this.tasksLength;
        this.isLoading = false;
      },
      error: () => (this.isLoading = false),
    });
    this.tasksService.fetchTasks();
  }
}
