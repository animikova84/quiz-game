import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  get isLogged() {
    return this.authService.isLoggedIn;
  }

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.SignOut();
  }

  ngOnInit(): void {
  }

}
