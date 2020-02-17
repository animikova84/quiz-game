import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userInfo: {}
  public userName: string = '';
 
  constructor(public authService: AuthService) { 
    this.userInfo = this.authService.userData;
  }

  ngOnInit(): void {
  }

}
