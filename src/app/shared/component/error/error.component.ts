import { Component } from '@angular/core';
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [MatFabButton],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {}
