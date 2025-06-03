import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './pages/home/home.page'; // Make sure this import exists

export const routes: Routes = [
  {
    path: '',
    component: HomePage // Starting page
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mounts',
        loadComponent: () => import('./pages/mounts/mounts.page').then(m => m.MountsPage)
      },
      {
        path: 'pets',
        loadComponent: () => import('./pets/pets.page').then(m => m.PetsPage)
      },
      {
        path: 'toys',
        loadComponent: () => import('./toys/toys.page').then(m => m.ToysPage)
      },
      {
        path: 'more',
        loadComponent: () => import('./more/more.page').then(m => m.MorePage)
      },
      {
        path: '',
        redirectTo: 'mounts',
        pathMatch: 'full'
      }
    ]
  }
];
