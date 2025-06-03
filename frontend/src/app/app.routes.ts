import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage // Start page
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
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
        redirectTo: 'mounts',
        pathMatch: 'full',
      },
    ],
  },
];
