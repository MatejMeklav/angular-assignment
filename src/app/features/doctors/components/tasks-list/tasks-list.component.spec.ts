import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListComponent } from './tasks-list.component';
import { By } from '@angular/platform-browser';
import { mockTasks } from '../../../../mock/mockTasks';

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;

    component.tasks = [];
    component.isLoading = true;
    component.isError = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const titleElement = fixture.debugElement.query(
      By.css('.mat-h4')
    ).nativeElement;

    expect(titleElement.textContent).toBe('Tasks');
  });

  it('should display empty list placeholder', () => {
    component.isLoading = false;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.list-content'));

    expect(element.children[0].nativeElement.textContent).toContain(
      'No tasks to display yet.'
    );
  });

  it('should display app-error component', () => {
    component.isLoading = false;
    component.isError = true;
    component.tasks = [];
    fixture.detectChanges();

    const appErrorElement = fixture.debugElement.query(By.css('.list-content'))
      .children[0].nativeElement;

    expect(appErrorElement.nodeName).toBe('APP-ERROR');
  });

  describe('Display list', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(TasksListComponent);
      component = fixture.componentInstance;

      component.tasksLength = 9;
      component.tasks = mockTasks.filter(task => task.userId === 1).slice(0, 9);
      component.isLoading = false;
      component.isError = false;
      component.isShowMore = true;
      fixture.detectChanges();
    });

    it('should display 9 tasks', () => {
      const element = fixture.debugElement.query(By.css('.list-content'));

      expect(element.children.length).toEqual(9);
    });

    it('should display 18 tasks after button is clicked', async () => {
      spyOn(component, 'emitDisplayTasks');

      const button = fixture.debugElement.query(By.css('.display-list'))
        .children[1].nativeElement;

      button.click();
      fixture.detectChanges();

      expect(component.emitDisplayTasks).toHaveBeenCalled();

      component.tasksLength = 18;
      component.tasks = mockTasks
        .filter(task => task.userId === 1)
        .slice(0, 18);
      fixture.detectChanges();

      const element = fixture.debugElement.query(By.css('.list-content'));

      expect(element.children.length).toEqual(18);
    });

    it('should display Show More button', () => {
      const button = fixture.debugElement.query(By.css('.display-list'))
        .children[1].nativeElement;

      expect(button.textContent).toContain('Show More');
    });

    it('should display Show Less button', () => {
      component.isShowMore = false;
      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css('.display-list'))
        .children[1].nativeElement;

      expect(button.textContent).toContain('Show Less');
    });
  });
});
