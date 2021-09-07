import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { washerBaseURL } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }


  registerWasher(user): Observable<any>{
    return this.http.post(`${washerBaseURL}/signup`, user, this.httpOptions);
  }

  loginWasher(user): Observable<any>{
    return this.http.post(`${washerBaseURL}/login`, user, this.httpOptions );
  }


  logoutWasher(){
    localStorage.removeItem('wjwt');
    this.router.navigate(['/home']);
  }

  loggedIn(){
    return !!localStorage.getItem('wjwt');
  }


  getToken(){
    return localStorage.getItem('wjwt');
  }


}
