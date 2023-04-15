import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, throwError } from 'rxjs';
import { Department, deptMapping } from '../model/department';
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
  postMapping(dept:deptMapping):Observable<deptMapping>{
    const headers = new HttpHeaders().set('content-type', 'application/json'); 
    return this.http.post<deptMapping>(this.apiUrl+'Employee/postdeptmapping',dept,{headers}).pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);
        throw err;
      })
    )
    }
}
