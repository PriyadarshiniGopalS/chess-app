import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Student } from './models/student.model';
import { Professional } from './models/professional.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  private apiUrl = 'https://priyadarshini.bsite.net/api/Enroll'; // Replace this with your API URL

  constructor(private http: HttpClient) { }

  // Method to add a new student
  addStudent(studentData: Student): Observable<HttpResponse<Student>> {
    return this.http.post<HttpResponse<Student>>(`${this.apiUrl}/students`, studentData);
  }

  // Method to add a new professional
  addProfessional(professionalData: Professional): Observable<HttpResponse<Professional>> {
    return this.http.post<HttpResponse<Professional>>(`${this.apiUrl}/professionals`, professionalData);
  }
}
