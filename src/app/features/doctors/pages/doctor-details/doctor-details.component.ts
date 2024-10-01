import { Component } from '@angular/core';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task-service';
import { ActivatedRoute } from '@angular/router';
import { DoctorDetailsCardComponent } from '../../components/doctor-details-card/doctor-details-card.component';
import { Doctor } from '../../models/doctor.model';
import { DoctorsService } from '../../services/doctors.service';

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

  constructor(
    private tasksService: TaskService,
    private doctorsService: DoctorsService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.tasksService.getTasksByDoctorId(parseInt(id)).subscribe(data => {
        this.tasks = data;
      });

      this.doctorsService.getDoctorById(parseInt(id)).subscribe(data => {
        this.doctorDetails = data;
      });
    }
  }
}
