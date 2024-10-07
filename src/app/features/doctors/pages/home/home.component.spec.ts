import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideHttpClient } from '@angular/common/http';
import { DoctorsListComponent } from '../../components/doctors-list/doctors-list.component';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
import { TaskService } from '../../services/task-service';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, DoctorsListComponent, TasksListComponent],
      providers: [provideHttpClient(), TaskService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display doctors and tasks list', () => {
    const element = fixture.debugElement.query(
      By.css('.dashboard-container')
    ).nativeElement;

    expect(element.children[0].nodeName).toBe('APP-DOCTORS-LIST');
    expect(element.children[1].nodeName).toBe('APP-TASKS-LIST');
  });
});
