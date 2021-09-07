import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

import { AuthServiceService } from 'src/app/Services/Customer/auth/auth-service.service';
import { AuthService } from 'src/app/Services/Washer/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = faUserAlt;

  selected = 'Customer';
  emailError = '';
  passwordError = '';
  constructor(private router: Router, private _auth: AuthServiceService, private _washerAuth: AuthService) { }

  ngOnInit(): void {
  }



  /* Login the user */
  login(customer) {

    this.emailError = '';
    this.passwordError = '';

    if (customer.value.role == 'Customer') {
      const user = { email: customer.value.email, password: customer.value.password };
      this._auth.loginCustomer(user)
        .subscribe(
          res => {
            localStorage.setItem('cjwt', res.token);
            this.router.navigate(['/customerDashboard/customerHome']);
          },
          err => { this.emailError = err.error.email, this.passwordError = err.error.password; }
        );
    }

    if (customer.value.role == 'Washer') {
      const user = { email: customer.value.email, password: customer.value.password };
      this._washerAuth.loginWasher(user)
        .subscribe(
          res => {
            localStorage.setItem('wjwt', res.token);
            this.router.navigate(['/washerDashboard/washerHome']);
          },
          err => { this.emailError = err.error.email, this.passwordError = err.error.password; }
        );
    }


  }


}
