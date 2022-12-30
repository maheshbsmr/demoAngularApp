import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { User } from '../model/role/user';

export class UserLogin{
  userName : string;
  password :string
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  apiUrl: string ='https://localhost:44371/api'
  constructor(  
    private router: Router,
    private http: HttpClient) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
        this.user = this.userSubject.asObservable();
     }
     public get userValue(): User {
      return this.userSubject.value;
     }
    login(userName:string,password:string) {
      debugger;
      return this.http.post<any>(`${this.apiUrl}/Users/login`,{userName,password})
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
              this.userSubject.next(user);
              return user;
          }));
  }
 
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null!);
    this.router.navigate(['/login']);
}
}
