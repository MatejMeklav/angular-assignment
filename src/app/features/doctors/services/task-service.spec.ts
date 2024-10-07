import { TaskService } from './task-service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mockTasks } from '../../../mock/mockTasks';

describe('TaskService', () => {
  let service: TaskService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TaskService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return tasks when getTasks is called', () => {
    httpClientSpy.get.and.returnValue(of(mockTasks));
    service.tasksObs$.subscribe({
      next: tasks => {
        expect(tasks).toEqual(mockTasks);
      },
      error: () => fail(),
    });
    service.fetchTasks();
  });

  it('should return doctor corresponding tasks  when getDoctorTasksById is called ', () => {
    const id = '1';
    const doctorsTasks = mockTasks.filter(task => task.userId === 1);

    httpClientSpy.get.and.returnValue(of(doctorsTasks));
    service.doctorsTasksObs$.subscribe({
      next: tasks => {
        expect(tasks).toEqual(doctorsTasks);
      },
      error: () => fail(),
    });
    service.fetchTasksByDoctorId(id);
  });
});
