import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksFetchSubj = new Subject<void>();

  tasksObs$: Observable<Task[]> = this.tasksFetchSubj.pipe(
    switchMap(() => {
      return this.http.get<Task[]>('todos');
    })
  );

  constructor(private http: HttpClient) {}

  fetchTasks(): void {
    this.tasksFetchSubj.next();
  }

  getTasksByDoctorId(userId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`users/${userId}/todos`);
  }
}
