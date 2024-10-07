import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsListComponent } from './doctors-list.component';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { mockDoctors } from '../../../../mock/mockDoctors';
import { provideRouter } from '@angular/router';
import { routes } from '../../../../app.routes';

describe('DoctorsListComponent', () => {
  let component: DoctorsListComponent;
  let fixture: ComponentFixture<DoctorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsListComponent],
      providers: [provideHttpClient(), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const titleElement = fixture.debugElement.query(
      By.css('.mat-h4')
    ).nativeElement;

    expect(titleElement.textContent).toBe('Doctors');
  });

  it('should display empty list placeholder', () => {
    component.isLoading = false;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.list-content'));

    expect(element.children[0].nativeElement.textContent).toContain(
      'No doctors to display yet.'
    );
  });

  it('should display app-error component', () => {
    component.isLoading = false;
    component.isError = true;
    component.doctors = [];
    fixture.detectChanges();

    const appErrorElement = fixture.debugElement.query(By.css('.list-content'))
      .children[0].nativeElement;

    expect(appErrorElement.nodeName).toBe('APP-ERROR');
  });

  describe('Display list', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(DoctorsListComponent);
      component = fixture.componentInstance;

      component.doctorsLength = 4;
      component.doctors = mockDoctors.slice(0, 4);
      component.isLoading = false;
      component.isError = false;
      fixture.detectChanges();
    });

    it('should display 4 doctors', () => {
      const element = fixture.debugElement.query(By.css('.list-content'));

      expect(element.children.length).toEqual(4);
    });

    it('should display 8 doctors after button is clicked', async () => {
      spyOn(component, 'displayMoreLess');

      const button = fixture.debugElement.query(By.css('.display-list'))
        .children[1].nativeElement;

      button.click();
      fixture.detectChanges();

      expect(component.displayMoreLess).toHaveBeenCalled();

      component.doctorsLength = 8;
      component.doctors = mockDoctors.slice(0, 8);
      fixture.detectChanges();

      const element = fixture.debugElement.query(By.css('.list-content'));

      expect(element.children.length).toEqual(8);
    });

    it('should display Show More button', () => {
      component.doctorsLength = 12;
      component.doctorsDisplayed = 4;
      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css('.display-list'))
        .children[1].nativeElement;

      expect(button.textContent).toContain('Show More');
    });

    it('should display Show Less button', () => {
      component.doctorsLength = 4;
      component.doctorsDisplayed = 5;
      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css('.display-list'))
        .children[1].nativeElement;

      expect(button.textContent).toContain('Show Less');
    });
  });
});
