import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';
import { Task } from '../../models/task.model';
import { TasksCardComponent } from '../tasks-card/tasks-card.component';
import { SpinnerComponent } from '../../../../shared/components/spinner/spinner.component';
import { MatFabButton } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { ErrorComponent } from '../../../../shared/component/error/error.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    DoctorCardComponent,
    TasksCardComponent,
    SpinnerComponent,
    MatFabButton,
    NgIf,
    ErrorComponent,
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent {
  @Input() tasks!: Task[];
  @Input() isLoading!: boolean;
  @Input() isError!: boolean;
  @Input() isShowMore!: boolean;
  @Input() tasksDisplayed!: number;
  @Input() tasksLength!: number;
  @Output() tasksDisplayedEmit = new EventEmitter<number>();

  emitDisplayTasks() {
    this.tasksDisplayedEmit.emit();
  }
}
