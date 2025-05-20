import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-more',
  imports: [IonicModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>More</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item routerLink="/about">
          <ion-label>About</ion-label>
        </ion-item>
        <ion-item routerLink="/settings">
          <ion-label>Settings</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Credits</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class MorePage {}
