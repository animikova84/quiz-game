import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../shared/guard/auth.guard';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate:[AuthGuard],
                data: {
                    isLogged: true
                } 
            },
        ]
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    },
];

export const UserRoutingModule = RouterModule.forChild(routes);