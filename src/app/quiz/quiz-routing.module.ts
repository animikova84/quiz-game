import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
    {
        path: 'quiz',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ListComponent
            },
            {
                path: 'view/:id',
                component: ViewComponent
            },
            {
                path: 'create',
                component: CreateComponent
            }
        ]
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    },
];

export const QuizRoutingModule = RouterModule.forChild(routes);