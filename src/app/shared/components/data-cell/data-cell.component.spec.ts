import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DataCellComponent } from './data-cell.component';

describe('DataCellComponent', () => {
  let component: DataCellComponent;
  let fixture: ComponentFixture<DataCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataCellComponent);
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
      By.css('.label')
    ).nativeElement;

    expect(labelElement.textContent).toBe('Test label');
  });

  it('should display the correct value when provided', () => {
    const valueElement = fixture.debugElement.query(
      By.css('.value')
    ).nativeElement;

    expect(valueElement.textContent).toContain('Test value');
  });

  it('should display an empty value when no value is provided', () => {
    component.value = undefined;
    fixture.detectChanges();

    const valueElement = fixture.debugElement.query(
      By.css('.value')
    ).nativeElement;

    expect(valueElement.textContent).toContain('');
  });
});
