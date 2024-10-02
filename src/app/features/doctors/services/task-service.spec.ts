import { TestBed } from '@angular/core/testing';

import { TaskService } from './task-service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { DoctorsService } from './doctors.service';
import { provideHttpClient } from '@angular/common/http';
import { mockTasks } from '../../../mock/mockTasks';

describe('TaskService', () => {
  let service: TaskService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DoctorsService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(TaskService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve tasks via GET request', () => {
    service.getTasks().subscribe(tasks => {
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpMock.expectOne('todos');
    expect(req.request.method).toBe('GET');
    req.flush(mockTasks);
  });

  it('should retrieve tasks by doctor ID via GET request', () => {
    const userId = 1;

    service.getTasksByDoctorId(userId).subscribe(tasks => {
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpMock.expectOne(`users/${userId}/todos`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTasks);
  });
});
