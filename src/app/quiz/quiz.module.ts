import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizService } from './quiz.service';

@NgModule({
  declarations: [ListComponent, CreateComponent, ViewComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    QuizRoutingModule
  ],
  providers:  [ QuizService ]
})
export class QuizModule { }
