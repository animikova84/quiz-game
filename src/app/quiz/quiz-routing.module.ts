import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    {
        path: 'quiz',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'quiz/list'
            },
            {
                path: 'view',
                component: ViewComponent
            },
            {
                path: 'create',
                component: CreateComponent
            }
        ]
    },
];

export const QuizRoutingModule = RouterModule.forChild(routes);