import { Component } from '@angular/core';
import { DoctorsListComponent } from '../../components/doctors-list/doctors-list.component';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task-service';
import { displayElementsUtil } from '../../../../shared/utils/displayElementsUtil';
import { SnackbarService } from '../../../../shared/services/snackbar.service';

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
  isError = false;
  tasksDisplayed = 9;
  tasksLength = 0;
  isShowMore = true;

  constructor(
    private tasksService: TaskService,
    private snackbarService: SnackbarService
  ) {
    this.isLoading = true;
    this.tasksService.tasksObs$.subscribe({
      next: data => {
        this.tasksLength = data.length;
        this.tasks = data.slice(0, this.tasksDisplayed);
        this.isShowMore = this.tasksDisplayed <= this.tasksLength;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.isError = true;
        this.snackbarService.apiErrorSnackbar();
      },
    });
    this.tasksService.fetchTasks();
  }

  changeTasksDisplayed() {
    this.tasksDisplayed = displayElementsUtil(
      this.tasksDisplayed,
      this.tasksLength,
      9
    );
    this.tasksService.fetchTasks();
  }
}
