import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/main').then((m) => m.MainLayout),
    children: [
      { path: '', loadComponent: () => import('./routes/main.index').then((m) => m.MainIndexPage) },
      {
        path: 'flights',
        loadComponent: () => import('./routes/main.flights').then((m) => m.MainFlightsPage),
      },
      {
        path: 'signals',
        loadComponent: () => import('./routes/main.signals').then((m) => m.MainSignalsPage),
      },
    ],
  },
];
