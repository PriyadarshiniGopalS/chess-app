import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './models/student.model';
import { Professional } from './models/professional.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  private apiUrl = 'https://priyadarshini.bsite.net/api/Enroll'; // Replace this with your API URL

  constructor(private http: HttpClient) { }

  // Method to add a new student
  addStudent(studentData: Student): Observable<boolean> {
    return this.http.post<Student>(`${this.apiUrl}/students`, studentData).pipe(
      map((response: any) => {
        return response.success;
      })
    );
  }

  // Method to add a new professional
  addProfessional(professionalData: Professional): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/professionals`, professionalData);
  }
}
