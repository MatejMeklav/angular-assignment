import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>('users');
  }

  getDoctorById(id: number): Observable<Doctor> {
    console.log(id);
    return this.getDoctors().pipe(
      map(doctors => doctors.filter(doctor => doctor.id === id)[0])
    );
  }
}
