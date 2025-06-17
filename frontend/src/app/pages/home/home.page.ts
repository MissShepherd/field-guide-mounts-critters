import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
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
