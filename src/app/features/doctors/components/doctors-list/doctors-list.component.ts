import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { DoctorsService } from '../../services/doctors.service';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';

@Component({
  selector: 'app-doctors-list',
  standalone: true,
  imports: [DoctorCardComponent],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.scss',
})
export class DoctorsListComponent {
  doctors: Doctor[] = [];

  constructor(private doctorsService: DoctorsService) {
    this.doctorsService.getDoctors().subscribe(data => {
      this.doctors = data;
    });
  }
}
