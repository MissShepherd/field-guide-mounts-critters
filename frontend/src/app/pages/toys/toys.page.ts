import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CharacterHeaderComponent } from '../../components/character-header/character-header.component';

@Component({
  selector: 'app-toys',
  standalone: true,
  imports: [IonicModule, CommonModule, CharacterHeaderComponent],
  templateUrl: './toys.page.html',
  styleUrls: ['./toys.page.scss']
})
export class ToysPage {
  toys = [
    'Piccolo of the Flaming Fire',
    'Orb of Deception',
    'Noble Garden Bunny',
    'Ethereal Portal',
    'Dark Portal',
    'Dazzling Rod'
  ];

  toysCollected = 150;
  totalToys = 500;
}
