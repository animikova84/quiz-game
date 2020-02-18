import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import {AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  items: Observable<any[]>;

  get isLogged() {
    return this.authService.isLoggedIn;
  }

  constructor(
    public authService: AuthService,
    firestore: AngularFirestore, 
    db: AngularFireDatabase
  ) {
    this.items = firestore.collection('quiz').valueChanges();
  }
  
}
