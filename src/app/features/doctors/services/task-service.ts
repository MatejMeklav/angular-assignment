import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksFetchSubj = new Subject<void>();
  private doctorsTasksFetchSubj = new Subject<string>();

  constructor(private http: HttpClient) {}

  tasksObs$: Observable<Task[]> = this.tasksFetchSubj.pipe(
    switchMap(() => {
      return this.http.get<Task[]>('todos');
    })
  );

  doctorsTasksObs$: Observable<Task[]> = this.doctorsTasksFetchSubj.pipe(
    switchMap(userId => {
      return this.http.get<Task[]>(`users/${userId}/todos`);
    })
  );

  fetchTasks(): void {
    this.tasksFetchSubj.next();
  }

  fetchTasksByDoctorId(id: string): void {
    this.doctorsTasksFetchSubj.next(id);
  }
}
