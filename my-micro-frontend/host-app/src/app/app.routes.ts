import { Route } from '@angular/router';
import { MainLayoutComponent } from '@my-micro-frontend/shared-ui';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'user-app',
        loadChildren: () => import('user_app/Routes').then((m) => m!.remoteRoutes),
      },
    ]
  }
];
