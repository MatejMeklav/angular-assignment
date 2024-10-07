import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';
import { By } from '@angular/platform-browser';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    component.isLoading = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display spinner when loading', () => {
    const spinnerElement = fixture.debugElement.query(
      By.css('.spinner-container')
    ).children[0].nativeElement;

    expect(spinnerElement.nodeName).toBe('MAT-SPINNER');
  });

  it('should not display spinner when not loading', () => {
    component.isLoading = false;
    fixture.detectChanges();

    const componentElement = fixture.debugElement.query(
      By.css('.spinner-container')
    );

    expect(componentElement.children[0]).not.toBeTruthy();
  });
});
