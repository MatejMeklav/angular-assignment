import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InfoDisplayComponent } from './info-display.component';

describe('InfoDisplayComponent', () => {
  let component: InfoDisplayComponent;
  let fixture: ComponentFixture<InfoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoDisplayComponent);
    component = fixture.componentInstance;
    component.label = 'Test label';
    component.value = 'Test value';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct label', () => {
    const labelElement = fixture.debugElement.query(
      By.css('.mat-caption')
    ).nativeElement;

    expect(labelElement.textContent).toBe('Test label');
  });

  it('should display the correct value', () => {
    const valueElement = fixture.debugElement.query(
      By.css('.mat-h6')
    ).nativeElement;

    expect(valueElement.textContent).toBe('Test value');
  });
});
