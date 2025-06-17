import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then(m => m.HomePage),
      },
      {
        path: 'mounts',
        loadComponent: () =>
          import('./pages/mounts/mounts.page').then(m => m.MountsPage),
      },
      {
        path: 'pets',
        loadComponent: () =>
          import('./pages/pets/pets.page').then(m => m.PetsPage),
      },
      {
        path: 'toys',
        loadComponent: () =>
          import('./pages/toys/toys.page').then(m => m.ToysPage),
      },
      {
        path: 'more',
        loadComponent: () =>
          import('./pages/more/more.page').then(m => m.MorePage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
