import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./areas/home/feature-landing/landing.routes').then((r) => r.homeLandingFeatureRoutes),
  },

  {
    path: 'profile',
    loadChildren: () =>
      import('./areas/profile/feature-landing/landing.routes').then(
        (r) => r.profileLandingFeatureRoutes,
      ),
  },
  {
    path: 'dev',
    loadChildren: () =>
      import('./areas/dev/home-landing/home.routes').then((r) => r.homeFeatureRoutes),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
