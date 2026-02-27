import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { ComponentsNavPage } from './internal/pages/components-nav';
import { HomePage } from './internal/pages/home';
import { ToolsPage } from './internal/pages/tools';
import { ButtonsPage } from './internal/pages/buttons';
import { BadgesPage } from './internal/pages/badges';
import { AlertsPage } from './internal/pages/alerts';
import { InputsPage } from './internal/pages/inputs';
import { CheckboxesPage } from './internal/pages/checkboxes';
import { SkeletonsPage } from './internal/pages/skeletons';
import { ProgressPage } from './internal/pages/progress';
import { TooltipsPage } from './internal/pages/tooltips';
import { FormsPage } from './internal/pages/forms';

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
        children: [
          {
            path: '',
            component: ComponentsNavPage,
          },
          {
            path: 'buttons',
            component: ButtonsPage,
          },
          {
            path: 'badges',
            component: BadgesPage,
          },
          {
            path: 'alerts',
            component: AlertsPage,
          },
          {
            path: 'inputs',
            component: InputsPage,
          },
          {
            path: 'checkboxes',
            component: CheckboxesPage,
          },
          {
            path: 'skeletons',
            component: SkeletonsPage,
          },
          {
            path: 'progress',
            component: ProgressPage,
          },
          {
            path: 'tooltips',
            component: TooltipsPage,
          },
        ],
      },
      {
        path: 'forms',
        component: FormsPage,
      },
    ],
  },
];
