import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './quiz/list/list.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ListComponent
    },
    { 
        path: 'signup', 
        component: RegisterComponent,
        canActivate:[AuthGuard],
        data: {
            isLogged: false
        }
    },
    { 
        path: 'login', 
        component: LoginComponent,
        canActivate:[AuthGuard],
        data: {
            isLogged: false
        }
    },
];

export const AppRoutingModule = RouterModule.forRoot(routes);