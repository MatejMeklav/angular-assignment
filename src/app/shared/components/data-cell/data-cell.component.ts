import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  standalone: true,
  imports: [],
  templateUrl: './data-cell.component.html',
  styleUrl: './data-cell.component.css',
})
export class DataCellComponent {
  @Input() label!: string;
  @Input() value?: string;
}
