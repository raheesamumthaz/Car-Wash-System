import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { customerBaseURL } from 'src/environments/environment';

import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }


  registerCustomer(user): Observable<any>{
    return this.http.post(`${customerBaseURL}/signup`, user, this.httpOptions );
  }


  loginCustomer(user): Observable<any>{
    return this.http.post(`${customerBaseURL}/login`, user, this.httpOptions );
  }

  logoutCustomer(){
    localStorage.removeItem('cjwt');
    this.router.navigate(['/home']);
  }

  loggedIn(){
    return !!localStorage.getItem('cjwt');
  }


  getToken(){
    return localStorage.getItem('cjwt');
  }

 
 
}
