import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user = JSON.parse(localStorage.getItem('user'));

  constructor(public authService: AuthService) { 
  }

  ngOnInit(): void {
  }

}
