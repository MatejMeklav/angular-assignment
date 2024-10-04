import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { DoctorsService } from '../../services/doctors.service';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';
import { SpinnerComponent } from '../../../../shared/components/spinner/spinner.component';
import { MatFabButton } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { displayElementsUtil } from '../../../../shared/utils/displayElementsUtil';

@Component({
  selector: 'app-doctors-list',
  standalone: true,
  imports: [DoctorCardComponent, SpinnerComponent, MatFabButton, NgIf],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.scss',
})
export class DoctorsListComponent {
  doctors: Doctor[] = [];
  isLoading = false;
  doctorsDisplayed = 2;
  doctorsLength = 0;

  constructor(private doctorsService: DoctorsService) {
    this.isLoading = true;
    this.doctorsService.doctorsObs$.subscribe({
      next: data => {
        this.doctorsLength = data.length;
        this.doctors = data.slice(0, this.doctorsDisplayed);
        this.isLoading = false;
      },
      error: () => (this.isLoading = false),
    });
    this.doctorsService.fetchDoctors();
  }

  displayMoreLess() {
    this.doctorsDisplayed = displayElementsUtil(
      this.doctorsDisplayed,
      this.doctorsLength,
      2
    );
    this.doctorsService.fetchDoctors();
  }
}
