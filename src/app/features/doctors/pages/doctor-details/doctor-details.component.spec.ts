import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorDetailsComponent } from './doctor-details.component';
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component';
import { DoctorDetailsCardComponent } from '../../components/doctor-details-card/doctor-details-card.component';
import { provideRouter, Router } from '@angular/router';
import { routes } from '../../../../app.routes';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { mockDoctors } from '../../../../mock/mockDoctors';

describe('DoctorDetailsComponent', () => {
  let component: DoctorDetailsComponent;
  let fixture: ComponentFixture<DoctorDetailsComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DoctorDetailsComponent,
        TasksListComponent,
        DoctorDetailsCardComponent,
      ],
      providers: [provideRouter(routes), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorDetailsComponent);
    component = fixture.componentInstance;
    component.doctorDetails = mockDoctors[0];

    router = TestBed.inject(Router);
    await router.navigate(['/doctor/1']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display doctor details card and tasks list', () => {
    const element = fixture.debugElement.query(
      By.css('.doctor-details-container')
    ).nativeElement;

    expect(element.children[0].nodeName).toBe('APP-DOCTOR-DETAILS-CARD');
    expect(element.children[1].nodeName).toBe('APP-TASKS-LIST');
  });
});
