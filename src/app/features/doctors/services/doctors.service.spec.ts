import { TestBed } from '@angular/core/testing';
import { DoctorsService } from './doctors.service';
import {
  provideHttpClientTesting,
  HttpTestingController,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { mockDoctors } from '../../../mock/mockDoctors';

describe('DoctorsService', () => {
  let service: DoctorsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DoctorsService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(DoctorsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GetMethods', () => {
    afterEach(() => {
      const req = httpMock.expectOne('users');
      expect(req.request.method).toBe('GET');
      req.flush(mockDoctors);
      httpMock.verify();
    });

    it('should retrieve the list of doctors via GET request', () => {
      service.getDoctors().subscribe(doctors => {
        expect(doctors).toEqual(mockDoctors);
      });
    });

    it('should retrieve a doctor by id', () => {
      service.getDoctorById(1).subscribe(doctor => {
        expect(doctor).toEqual(mockDoctors[0]);
      });
    });

    it('should return undefined if doctor with given id does not exist', () => {
      service.getDoctorById(3).subscribe(doctor => {
        expect(doctor).toBeUndefined();
      });
    });
  });
});
