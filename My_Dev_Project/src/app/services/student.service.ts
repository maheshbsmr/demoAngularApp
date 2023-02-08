import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, throwError } from 'rxjs';
import { student } from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl: string ='https://localhost:44371/api/'
  constructor(private http:HttpClient) { }

  getAllStudent():Observable<student[]>{
    const headers = new HttpHeaders().set('content-type', 'application/json'); 
    return this.http.get<student[]>(this.apiUrl+'Student/getStudentList',{headers}).pipe(
      catchError(()=>{
        return EMPTY;
      })
    );
  }
}
