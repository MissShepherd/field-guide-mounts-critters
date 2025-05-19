import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MountsPage } from './mounts.page';

const routes: Routes = [
  {
    path: '',
    component: MountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MountsPageRoutingModule {}
