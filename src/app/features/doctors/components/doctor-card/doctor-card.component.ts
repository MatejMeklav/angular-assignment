import { Component, Input } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { RouterLink } from '@angular/router';
import { InfoDisplayComponent } from '../../../../shared/components/info-display/info-display.component';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [RouterLink, InfoDisplayComponent, MatAnchor],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.css',
})
export class DoctorCardComponent {
  @Input() doctor!: Doctor;
}
