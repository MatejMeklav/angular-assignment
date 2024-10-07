import { DoctorsService } from './doctors.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mockDoctors } from '../../../mock/mockDoctors';

describe('DoctorsService', () => {
  let service: DoctorsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DoctorsService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return doctors when getDoctors is called', () => {
    httpClientSpy.get.and.returnValue(of(mockDoctors));
    service.doctorsObs$.subscribe({
      next: doctors => {
        expect(doctors).toEqual(mockDoctors);
      },
      error: () => fail(),
    });
    service.fetchDoctors();
  });

  it('should return doctor details  when getDoctorDetails get called ', () => {
    const id = 1;

    httpClientSpy.get.and.returnValue(of(mockDoctors));
    service.doctorDetailsObs$.subscribe({
      next: doctor => {
        expect(doctor).toEqual(mockDoctors[0]);
      },
      error: () => fail(),
    });
    service.fetchDoctorDetails(id);
  });
});
