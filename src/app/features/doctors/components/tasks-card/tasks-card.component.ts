import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tasks-card',
  standalone: true,
  imports: [MatIcon, NgIf],
  templateUrl: './tasks-card.component.html',
  styleUrl: './tasks-card.component.scss',
})
export class TasksCardComponent {
  @Input() task!: Task;
}
