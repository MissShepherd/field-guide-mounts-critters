import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'mounts',
        loadChildren: () =>
          import('../pages/mounts/mounts.module').then(m => m.MountsPageModule),
      },
      {
        path: 'pets',
        loadChildren: () =>
          import('../pages/pets/pets.module').then(m => m.PetsPageModule),
      },
      {
        path: 'collection',
        loadChildren: () =>
          import('../pages/collection/collection.module').then(m => m.CollectionPageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
