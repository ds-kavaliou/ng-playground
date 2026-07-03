import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@app/routes/main').then((m) => m.MainLayout),
    children: [
      { path: '', loadComponent: () => import('@app/routes/main.index').then((m) => m.MainIndexPage) },
    ],
  },
];
