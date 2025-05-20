import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/mounts',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'mounts', loadComponent: () => import('./mounts/mounts.page').then(m => m.MountsPage) },
      { path: 'pets', loadComponent: () => import('./pets/pets.page').then(m => m.PetsPage) },
      { path: 'toys', loadComponent: () => import('./toys/toys.page').then(m => m.ToysPage) },
      { path: 'search', loadComponent: () => import('./search/search.page').then(m => m.SearchPage) },
      { path: 'more', loadComponent: () => import('./more/more.page').then(m => m.MorePage) }
    ]
  }
];
