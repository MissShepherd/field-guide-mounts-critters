import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mounts',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Mounts</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="parchment-bg">
      <div class="content-wrapper">
        <h1>Mount Collection</h1>
        <p>Display your mount list here</p>
      </div>
    </ion-content>
  `,
  styles: [`
    .parchment-bg {
      --background: url('/assets/images/parchment-bg.png') no-repeat center center / cover;
    }

    .content-wrapper {
      padding: 16px;
      color: #000;
    }
  `]
})
export class MountsPage {}
