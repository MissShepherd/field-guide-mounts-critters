import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-mounts',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './mounts.page.html'
})
export class MountsPage {
  showCollectedOnly = false;

  mounts = [
    {
      name: 'Acherus Deathcharger',
      image: '/assets/mounts/deathcharger.png',
      collected: true,
      description: 'Reward from the Death Knight starting zone.'
    },
    {
      name: 'Armored Brown Bear',
      image: '/assets/mounts/brownbear.png',
      collected: false,
      description: 'Purchased from vendors in Dalaran.'
    }
  ];

  get filteredMounts() {
    return this.showCollectedOnly
      ? this.mounts.filter(m => m.collected)
      : this.mounts;
  }

  openMountDetails(mount: any) {
    alert(`Mount: ${mount.name}\n\n${mount.description}`); // Placeholder for modal
  }
}
