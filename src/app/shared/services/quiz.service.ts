import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  gameData: any;
  items: AngularFireList<any[]>;
  constructor(
    public afs: AngularFirestore, 
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone
  ) {    

  }

  getAllGames() {
    this.items = this.db.list('quiz');
    return this.items.valueChanges();
  }

  getSingleQuiz(id: string) {
    return this.db.object('quiz/' + id).valueChanges();
  }

}
