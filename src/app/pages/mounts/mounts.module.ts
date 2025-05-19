import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MountsPageRoutingModule } from './mounts-routing.module';

import { MountsPage } from './mounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MountsPageRoutingModule
  ],
  declarations: [MountsPage]
})
export class MountsPageModule {}
