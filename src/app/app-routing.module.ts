import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },  
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./pages/collection/collection.module').then( m => m.CollectionPageModule)
  },
  {
    path: 'mounts',
    loadChildren: () => import('./pages/mounts/mounts.module').then( m => m.MountsPageModule)
  },
  {
    path: 'pets',
    loadChildren: () => import('./pages/pets/pets.module').then( m => m.PetsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
