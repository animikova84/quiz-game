import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  login(username: string, password: string) {
    this.authService.SignIn(username, password);
    this.router.navigate(['']);
  }

  googleLogin() {
    this.authService.GoogleAuth();
  }
}
