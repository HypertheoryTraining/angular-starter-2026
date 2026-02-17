import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { HomePage } from './internal/pages/home';


export const homeFeatureRoutes: Routes = [
  {
    path: '',
    providers: [],
    component: Home,
    children: [
      {
        path: '',
        component: HomePage
      }
    ]
  },
];
