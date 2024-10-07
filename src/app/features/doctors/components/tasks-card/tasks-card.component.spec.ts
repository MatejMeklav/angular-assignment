import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCardComponent } from './tasks-card.component';
import { mockTasks } from '../../../../mock/mockTasks';
import { By } from '@angular/platform-browser';

describe('TasksCardComponent', () => {
  let component: TasksCardComponent;
  let fixture: ComponentFixture<TasksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksCardComponent);
    component = fixture.componentInstance;
    component.task = mockTasks[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task title', () => {
    const titleElement = fixture.debugElement.query(
      By.css('.task-card-container')
    ).children[0].nativeElement;

    expect(titleElement.textContent).toBe(mockTasks[0].title);
  });

  it('should display completed paragraph', () => {
    const completedContainer = fixture.debugElement.query(
      By.css('.completed-container')
    ).children[0].nativeElement;

    expect(completedContainer.textContent).toBe('completed:');
  });

  it('should display not completed logo', () => {
    const logo = fixture.debugElement.query(By.css('.completed-container'))
      .children[1].nativeElement;

    expect(logo.ariaLabel).toBe('not completed logo');
  });

  it('should display completed logo', () => {
    component.task = mockTasks[1];
    fixture.detectChanges();

    const logo = fixture.debugElement.query(By.css('.completed-container'))
      .children[1].nativeElement;

    expect(logo.ariaLabel).toBe('completed logo');
  });
});
