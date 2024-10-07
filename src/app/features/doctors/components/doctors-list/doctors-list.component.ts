import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { DoctorsService } from '../../services/doctors.service';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';
import { SpinnerComponent } from '../../../../shared/components/spinner/spinner.component';
import { MatFabButton } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { displayElementsUtil } from '../../../../shared/utils/displayElementsUtil';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { ErrorComponent } from '../../../../shared/components/error/error.component';

@Component({
  selector: 'app-doctors-list',
  standalone: true,
  imports: [
    DoctorCardComponent,
    SpinnerComponent,
    MatFabButton,
    NgIf,
    ErrorComponent,
  ],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.scss',
})
export class DoctorsListComponent {
  doctors: Doctor[] = [];
  isLoading = false;
  isError = false;
  doctorsDisplayed = 4;
  doctorsLength = 0;

  constructor(
    private doctorsService: DoctorsService,
    private snackbarService: SnackbarService
  ) {
    this.isLoading = true;
    this.doctorsService.doctorsObs$.subscribe({
      next: data => {
        this.doctorsLength = data.length;
        this.doctors = data.slice(0, this.doctorsDisplayed);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.isError = true;
        this.snackbarService.apiErrorSnackbar();
      },
    });
    this.doctorsService.fetchDoctors();
  }

  displayMoreLess() {
    this.doctorsDisplayed = displayElementsUtil(
      this.doctorsDisplayed,
      this.doctorsLength,
      4
    );
    this.doctorsService.fetchDoctors();
  }
}
