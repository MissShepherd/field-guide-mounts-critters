import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CharacterHeaderComponent } from '../../components/character-header/character-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CharacterHeaderComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  mountsCollected = 120;
  totalMounts = 600;

  petsCollected = 75;
  totalPets = 1000;

  toysCollected = 120;
  totalToys = 300;

  getMountsProgress(): number {
    return this.totalMounts > 0 ? this.mountsCollected / this.totalMounts : 0;
  }

  getPetsProgress(): number {
    return this.totalPets > 0 ? this.petsCollected / this.totalPets : 0;
  }

  getToysProgress(): number {
    return this.totalToys > 0 ? this.toysCollected / this.totalToys : 0;
  }
}
