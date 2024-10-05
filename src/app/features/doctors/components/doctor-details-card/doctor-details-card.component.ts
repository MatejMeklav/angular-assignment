import { Component, Input } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { DataCellComponent } from '../../../../shared/components/data-cell/data-cell.component';
import { MatIcon } from '@angular/material/icon';
import { MatFabAnchor, MatFabButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { ErrorComponent } from '../../../../shared/component/error/error.component';

@Component({
  selector: 'app-doctor-details-card',
  standalone: true,
  imports: [
    DataCellComponent,
    MatIcon,
    MatFabAnchor,
    RouterLink,
    NgIf,
    MatFabButton,
    ErrorComponent,
  ],
  templateUrl: './doctor-details-card.component.html',
  styleUrl: './doctor-details-card.component.scss',
})
export class DoctorDetailsCardComponent {
  @Input() doctor?: Doctor;
  @Input() isLoading!: boolean;
  @Input() isError!: boolean;
}
