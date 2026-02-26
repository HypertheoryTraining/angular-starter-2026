import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { HomePage } from './internal/pages/home';
import { ToolsPage } from './internal/pages/tools';
import { ComponentsPage } from './internal/pages/components';

export const homeFeatureRoutes: Routes = [
  {
    path: '',
    providers: [],
    component: Home,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'tools',
        component: ToolsPage,
      },
      {
        path: 'components',
        component: ComponentsPage,
      },
    ],
  },
];
