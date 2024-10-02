import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { DebugElement } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from '../../../app.routes';
import { DoctorDetailsComponent } from '../../../features/doctors/pages/doctor-details/doctor-details.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let logoIconDe: DebugElement;
  let logoutIconDe: DebugElement;
  let location: Location;
  let router: Router;
  const homeRoute = '';
  const doctorDetailsRoute = '/doctor/1';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule, HeaderComponent, DoctorDetailsComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    logoIconDe = fixture.debugElement.query(By.css('.logo'));
    logoutIconDe = fixture.debugElement.query(By.css('.logout-logo'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title for Home Page', async () => {
    await router.navigate([homeRoute]);
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(
      By.css('.mat-h4')
    ).nativeElement;
    expect(titleElement.textContent).toBe('- Dashboard');
    expect(location.path()).toBe(homeRoute);
  });

  it('should display the correct title for  Doctor Details Page ', async () => {
    await router.navigate([doctorDetailsRoute]);
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(
      By.css('.mat-h4')
    ).nativeElement;
    expect(titleElement.textContent).toBe('- Doctor details');
    expect(location.path()).toBe(doctorDetailsRoute);
  });

  it('should display the logo icon with correct fontIcon', () => {
    expect(logoIconDe).toBeTruthy();
    const logoIcon = logoIconDe.nativeElement.getAttribute(
      'ng-reflect-font-icon'
    );
    expect(logoIcon).toBe('medication');
  });

  it('should display the logout icon with correct fontIcon', () => {
    expect(logoutIconDe).toBeTruthy();
    const logoutIcon = logoutIconDe.nativeElement.getAttribute(
      'ng-reflect-font-icon'
    );
    expect(logoutIcon).toBe('logout');
  });

  it('should have aria-label for logo and logout icons', () => {
    const logoIcon = logoIconDe.nativeElement;
    const logoutIcon = logoutIconDe.nativeElement;
    expect(logoIcon.getAttribute('aria-label')).toBe('logo icon');
    expect(logoutIcon.getAttribute('aria-label')).toBe('logout icon');
  });
});
