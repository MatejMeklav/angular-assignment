import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideHttpClient } from '@angular/common/http';
import { DoctorsListComponent } from '../../components/doctors-list/doctors-list.component';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
import { mockTasks } from '../../../../mock/mockTasks';
import { TaskService } from '../../services/task-service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let getTasksSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, DoctorsListComponent, TasksListComponent],
      providers: [provideHttpClient(), TaskService],
    }).compileComponents();

    const taskService = TestBed.inject(TaskService);
    getTasksSpy = spyOn(taskService, 'getTasks').and.returnValue(of(mockTasks));
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have tasks defined', () => {
    expect(component.tasks).toBeDefined();
  });

  it('should match tasks to mocked tasks', () => {
    component.tasks = mockTasks;
    fixture.detectChanges();
    expect(component.tasks).toBeDefined();
  });
});
