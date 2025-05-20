import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-mounts',
  imports: [IonicModule, CommonModule],
  templateUrl: './mounts.page.html'
})
export class MountsPage {
  mounts = [
    { name: 'Acherus Deathcharger', image: '/assets/mounts/deathcharger.png' },
    { name: 'Armored Brown Bear', image: '/assets/mounts/brownbear.png' }
  ];
}
