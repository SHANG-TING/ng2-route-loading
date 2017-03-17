import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  }
];

export const AuthRoutes = RouterModule.forChild(routes);
