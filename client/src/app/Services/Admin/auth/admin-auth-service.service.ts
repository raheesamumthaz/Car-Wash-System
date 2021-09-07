import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }

  loginAdmin(data): Observable <any> {
    return this.http.post(`${adminBaseURL}/login`, data, this.httpOptions);
  }

  logoutAdmin(){
    localStorage.removeItem('ajwt');
    this.router.navigate(['/home']);
  }

  loggedIn(){
    return !!localStorage.getItem('ajwt');
  }

  getToken(){
    return localStorage.getItem('ajwt');
  }

}
