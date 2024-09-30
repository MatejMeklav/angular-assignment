import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('todos');
  }

  getTasksByDoctorId(userId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`users/${userId}/todos`);
  }
}
