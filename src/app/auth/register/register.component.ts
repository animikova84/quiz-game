import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  register(email: string, password: string) {
    this.authService.SignUp(email, password);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
