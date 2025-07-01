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
  // ✅ Dummy data for now
  collected = 120;
  total = 600;

  mounts = [
    { name: 'Ashes of Al’ar' },
    { name: 'Invincible' },
    { name: 'Swift Spectral Tiger' },
    { name: 'Rivendare’s Deathcharger' },
    { name: 'Heavenly Onyx Cloud Serpent' },
    { name: 'Mimiron’s Head' },
    { name: 'Celestial Steed' }
  ];
}
