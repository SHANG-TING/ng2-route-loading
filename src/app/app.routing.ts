import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    //if this url is not exist, redirect to auth
    {
        path: '**',
        redirectTo: 'auth'
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
