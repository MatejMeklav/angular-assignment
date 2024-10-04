import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';
import { Task } from '../../models/task.model';
import { TasksCardComponent } from '../tasks-card/tasks-card.component';
import { SpinnerComponent } from '../../../../shared/components/spinner/spinner.component';
import { MatFabButton } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { TaskService } from '../../services/task-service';
import { displayElementsUtil } from '../../../../shared/utils/displayElementsUtil';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    DoctorCardComponent,
    TasksCardComponent,
    SpinnerComponent,
    MatFabButton,
    NgIf,
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent {
  @Input() tasks!: Task[];
  @Input() isLoading!: boolean;
  @Input() isShowMore!: boolean;
  @Input() tasksDisplayed!: number;
  @Input() tasksLength!: number;
  @Input() displayMoreLess!: () => void;
  @Output() tasksDisplayedEmit = new EventEmitter<number>();

  setDisplayTasks() {
    const value = displayElementsUtil(this.tasksDisplayed, this.tasksLength, 9);
    this.tasksDisplayedEmit.emit(value);
  }

  constructor(private tasksService: TaskService) {}

  handleButtonClick() {
    this.setDisplayTasks();
    this.tasksService.fetchTasks();
  }
}
