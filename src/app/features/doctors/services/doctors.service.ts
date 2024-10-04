import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor.model';
import { map, Observable, Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  private doctorsFetchSubj = new Subject<void>();

  doctorsObs$: Observable<Doctor[]> = this.doctorsFetchSubj.pipe(
    switchMap(() => {
      return this.http.get<Doctor[]>('users');
    })
  );

  constructor(private http: HttpClient) {}

  fetchDoctors(): void {
    this.doctorsFetchSubj.next();
  }

  getDoctorById(id: number): Observable<Doctor> {
    return this.http
      .get<Doctor[]>('users')
      .pipe(
        map(
          (doctors: Doctor[]) => doctors.filter(doctor => doctor.id === id)[0]
        )
      );
  }
}
