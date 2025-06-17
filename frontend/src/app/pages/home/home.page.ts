import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // falls du z. B. *ngIf oder *ngFor nutzt

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
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

  getMountsProgress() {
    return this.mountsCollected / this.totalMounts;
  }

  getPetsProgress() {
    return this.petsCollected / this.totalPets;
  }

  getToysProgress() {
    return this.toysCollected / this.totalToys;
  }
}
