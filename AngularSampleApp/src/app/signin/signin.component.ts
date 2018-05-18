import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, public auth: AuthService) {
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['./home']);
    }
  }

  onLoginClick() {
    FB.getLoginStatus(handleLoginResponse.bind(this, true));

    return false;
  }

}

function handleLoginResponse(loginIfNecessary, response) {
  if (response.status === 'connected') {
    let { authResponse } = response;
    authResponse && localStorage.setItem('token', authResponse.accessToken);

    this.router.navigate(['./home']);
  } else if (loginIfNecessary) {
    FB.login(handleLoginResponse.bind(this, false));
  }
}
