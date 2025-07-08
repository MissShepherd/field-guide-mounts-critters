import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mounts',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './mounts.page.html',
  styleUrls: ['./mounts.page.scss']
})
export class MountsPage {
  mounts = [
    'Ashes of Al\'ar',
    'Invincible',
    'Swift Spectral Tiger',
    'Rivendare’s Deathcharger',
    'Heavenly Onyx Cloud Serpent',
    'Mimiron’s Head',
    'Celestial Steed'
  ];
}
