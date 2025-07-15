import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
  template: `
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom" class="wow-tab-bar">
        <ion-tab-button tab="home" href="/tabs/home">
          <img src="assets/icons/home.png" class="tab-icon" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="mounts" href="/tabs/mounts">
          <img src="assets/icons/mount_icon.png" class="tab-icon" />
          <ion-label>Mounts</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="pets" href="/tabs/pets">
          <img src="assets/icons/pet_icon.png" class="tab-icon" />
          <ion-label>Pets</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="toys" href="/tabs/toys">
          <img src="assets/icons/toy_icon.png" class="tab-icon" />
          <ion-label>Toys</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="more" href="/tabs/more">
          <img src="assets/icons/more_icon.png" class="tab-icon" />
          <ion-label>More</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  styleUrls: ['./tabs.page.scss']
})
export class TabsPage {}
