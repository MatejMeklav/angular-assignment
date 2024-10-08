import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  standalone: true,
  imports: [],
  templateUrl: './data-cell.component.html',
  styleUrl: './data-cell.component.scss',
})
export class DataCellComponent {
  @Input() label!: string;
  @Input() value?: string;
  @Input() isLoading!: boolean;
}
