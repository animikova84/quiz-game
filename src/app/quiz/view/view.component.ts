import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import 'firebase/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  items$: Observable<any>;
  id:string;
  constructor(
    private afb: AngularFirestore, 
    private db: AngularFireDatabase, 
    private route: ActivatedRoute,
    private quizService: QuizService) {
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.quizService.getSingleQuiz(this.id).subscribe(news => {
      console.log(news)
  });
    
  }
}
