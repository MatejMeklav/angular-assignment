import { Component } from '@angular/core';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task-service';
import { ActivatedRoute } from '@angular/router';
import { DoctorDetailsCardComponent } from '../../components/doctor-details-card/doctor-details-card.component';
import { Doctor } from '../../models/doctor.model';
import { DoctorsService } from '../../services/doctors.service';
import { displayElementsUtil } from '../../../../shared/utils/displayElementsUtil';
import { SnackbarService } from '../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [TasksListComponent, DoctorDetailsCardComponent],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.scss',
})
export class DoctorDetailsComponent {
  tasks: Task[] = [];
  doctorDetails?: Doctor;
  tasksLength = 0;
  tasksDisplayed = 9;
  isShowMore = true;
  isLoadingTasks = false;
  isErrorTasks = false;
  isLoadingDoctorDetails = false;
  isErrorDoctorDetails = false;
  doctorId = '';

  constructor(
    private tasksService: TaskService,
    private doctorsService: DoctorsService,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.doctorId = id;
      this.isLoadingTasks = true;
      this.tasksService.doctorsTasksObs$.subscribe({
        next: data => {
          this.tasksLength = data.length;
          this.tasks = data.slice(0, this.tasksDisplayed);
          this.isShowMore = this.tasksDisplayed <= this.tasksLength;
          this.isLoadingTasks = false;
        },
        error: () => {
          this.isLoadingTasks = false;
          this.isErrorTasks = true;
          this.snackbarService.apiErrorSnackbar();
        },
      });
      this.tasksService.fetchTasksByDoctorId(id);

      this.isLoadingDoctorDetails = true;
      this.doctorsService.doctorDetailsObs$.subscribe({
        next: data => {
          this.doctorDetails = data;
          this.isLoadingDoctorDetails = false;
        },
        error: () => {
          this.isLoadingDoctorDetails = false;
          this.isErrorDoctorDetails = true;
          this.snackbarService.apiErrorSnackbar();
        },
      });
      this.doctorsService.fetchDoctorDetails(parseInt(id));
    }
  }

  changeTasksDisplayed() {
    this.tasksDisplayed = displayElementsUtil(
      this.tasksDisplayed,
      this.tasksLength,
      9
    );

    if (this.doctorId) {
      this.tasksService.fetchTasksByDoctorId(this.doctorId);
    }
  }
}
