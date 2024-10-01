import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-display',
  standalone: true,
  imports: [],
  templateUrl: './info-display.component.html',
  styleUrl: './info-display.component.scss',
})
export class InfoDisplayComponent {
  @Input() label!: string;
  @Input() value!: string;
}
