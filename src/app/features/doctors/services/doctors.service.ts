import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor.model';
import { map, Observable, Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  private doctorsFetchSubj = new Subject<void>();
  private doctorDetailsFetchSubj = new Subject<number>();

  constructor(private http: HttpClient) {}

  doctorsObs$: Observable<Doctor[]> = this.doctorsFetchSubj.pipe(
    switchMap(() => {
      return this.http.get<Doctor[]>('users');
    })
  );

  doctorDetailsObs$: Observable<Doctor> = this.doctorDetailsFetchSubj.pipe(
    switchMap(userId => {
      return this.http
        .get<Doctor[]>('users')
        .pipe(
          map(
            (doctors: Doctor[]) =>
              doctors.filter(doctor => doctor.id === userId)[0]
          )
        );
    })
  );

  fetchDoctors(): void {
    this.doctorsFetchSubj.next();
  }

  fetchDoctorDetails(id: number) {
    this.doctorDetailsFetchSubj.next(id);
  }
}
