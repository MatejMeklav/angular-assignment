import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailsCardComponent } from './doctor-details-card.component';
import { provideRouter, RouterLinkWithHref } from '@angular/router';
import { mockDoctors } from '../../../../mock/mockDoctors';
import { By } from '@angular/platform-browser';

describe('DoctorDetailsCardComponent', () => {
  let component: DoctorDetailsCardComponent;
  let fixture: ComponentFixture<DoctorDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorDetailsCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorDetailsCardComponent);
    component = fixture.componentInstance;
    component.doctor = mockDoctors[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title/doctors name', () => {
    const titleElement = fixture.nativeElement.querySelector('h6');

    expect(titleElement.textContent).toContain(mockDoctors[0].name);
  });

  it('should display back button', () => {
    const buttonElement = fixture.debugElement.query(
      By.directive(RouterLinkWithHref)
    ).nativeElement;

    expect(buttonElement.children[2].textContent).toContain('Back');
    expect(buttonElement.nodeName).toBe('A');
  });

  it('should redirect to home/dashboard on back button click', () => {
    const linkElement = fixture.debugElement.query(
      By.directive(RouterLinkWithHref)
    ).nativeElement;

    expect(linkElement.getAttribute('href')).toBe(`/`);
  });

  it('should display app-error component', () => {
    component.isLoading = false;
    component.isError = true;
    fixture.detectChanges();

    const appErrorElement = fixture.debugElement.query(
      By.css('.doctor-details-card')
    ).children[1].nativeElement;

    expect(appErrorElement.nodeName).toBe('APP-ERROR');
  });

  it('should display doctor details container with data cells', () => {
    component.isError = false;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.list-content'));

    expect(element.children[0].componentInstance.label).toBe('Username');
    expect(element.children[0].componentInstance.value).toBe(
      mockDoctors[0].username
    );
    expect(element.children[1].componentInstance.label).toBe('Email');
    expect(element.children[1].componentInstance.value).toBe(
      mockDoctors[0].email
    );
    expect(element.children[2].componentInstance.label).toBe('Phone');
    expect(element.children[2].componentInstance.value).toBe(
      mockDoctors[0].phone
    );
    expect(element.children[3].componentInstance.label).toBe('Website');
    expect(element.children[3].componentInstance.value).toBe(
      mockDoctors[0].website
    );
    expect(element.children[4].componentInstance.label).toBe('City');
    expect(element.children[4].componentInstance.value).toBe(
      mockDoctors[0].address.city
    );
    expect(element.children[5].componentInstance.label).toBe('Street');
    expect(element.children[5].componentInstance.value).toBe(
      mockDoctors[0].address.street
    );
    expect(element.children[6].componentInstance.label).toBe('Zipcode');
    expect(element.children[6].componentInstance.value).toBe(
      mockDoctors[0].address.zipcode
    );
    expect(element.children[7].componentInstance.label).toBe('Suite');
    expect(element.children[7].componentInstance.value).toBe(
      mockDoctors[0].address.suite
    );
    expect(element.children[8].componentInstance.label).toBe('Company');
    expect(element.children[8].componentInstance.value).toBe(
      mockDoctors[0].company.name
    );
    expect(element.children[9].componentInstance.label).toBe(
      'Company Catchphrase'
    );
    expect(element.children[9].componentInstance.value).toBe(
      mockDoctors[0].company.catchPhrase
    );
  });

  it('should display loading skeletons while loading data', () => {
    component.isLoading = true;
    component.doctor = undefined;
    fixture.detectChanges();

    const element = fixture.debugElement.queryAll(By.css('.loading-skeleton'));

    expect(element.length).toBe(11);
  });
});
