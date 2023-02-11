import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Department } from '../model/department';
import { employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl: string ='https://localhost:44371/api/'
  constructor(private http :HttpClient) { }

  getAllStudent():Observable<employee[]>{
    const headers = new HttpHeaders().set('content-type', 'application/json'); 
    return this.http.get<employee[]>(this.apiUrl+'Employee/getemployeelist',{headers}).pipe(
      catchError(()=>{
        return EMPTY;
      })
    );
  }

  getAllDepartment():Observable<Department[]>{
    const headers = new HttpHeaders().set('content-type', 'application/json'); 
    return this.http.get<Department[]>(this.apiUrl+'Employee/getdepartmentlist',{headers}).pipe(
      catchError(()=>{
        return EMPTY;
      })
    );
  }
  
}
