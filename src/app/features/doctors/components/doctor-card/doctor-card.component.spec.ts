import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorCardComponent } from './doctor-card.component';
import { InfoDisplayComponent } from '../../../../shared/components/info-display/info-display.component';
import { provideRouter, RouterLinkWithHref } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { mockDoctors } from '../../../../mock/mockDoctors';

describe('DoctorCardComponent', () => {
  let component: DoctorCardComponent;
  let fixture: ComponentFixture<DoctorCardComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.doctor = mockDoctors[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title/doctors name', () => {
    const nameElement: HTMLElement = debugElement.query(
      By.css('h5')
    ).nativeElement;
    expect(nameElement.textContent).toBe(mockDoctors[0].name);
  });

  it('should display the doctors info in the app-info-display components', () => {
    const infoDisplays = debugElement.queryAll(
      By.directive(InfoDisplayComponent)
    );

    expect(infoDisplays.length).toBe(4);
    expect(infoDisplays[0].componentInstance.label).toBe('Username');
    expect(infoDisplays[0].componentInstance.value).toBe(
      mockDoctors[0].username
    );
    expect(infoDisplays[1].componentInstance.label).toBe('Email');
    expect(infoDisplays[1].componentInstance.value).toBe(mockDoctors[0].email);
    expect(infoDisplays[2].componentInstance.label).toBe('Phone');
    expect(infoDisplays[2].componentInstance.value).toBe(mockDoctors[0].phone);
    expect(infoDisplays[3].componentInstance.label).toBe('Website');
    expect(infoDisplays[3].componentInstance.value).toBe(
      mockDoctors[0].website
    );
  });

  it("should link to the doctor's details page", () => {
    const linkElement = debugElement.query(
      By.directive(RouterLinkWithHref)
    ).nativeElement;

    expect(linkElement.getAttribute('href')).toBe(
      `/doctor/${mockDoctors[0].id}`
    );
  });
});
