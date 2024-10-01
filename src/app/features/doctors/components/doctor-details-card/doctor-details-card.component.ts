import { Component, Input } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { DataCellComponent } from '../../../../shared/components/data-cell/data-cell.component';
import { MatIcon } from '@angular/material/icon';
import { MatFabAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-details-card',
  standalone: true,
  imports: [DataCellComponent, MatIcon, MatFabAnchor, RouterLink],
  templateUrl: './doctor-details-card.component.html',
  styleUrl: './doctor-details-card.component.css',
})
export class DoctorDetailsCardComponent {
  @Input() doctor?: Doctor;
}
