import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CharacterHeaderComponent } from '../../components/character-header/character-header.component';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [IonicModule, CommonModule, CharacterHeaderComponent],
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss']
})
export class PetsPage {
  pets = [
    'Zergling',
    'Mini Diablo',
    'Panda Cub',
    'Clockwork Gnome',
    'Grunty',
    'Murkalot',
    'Magical Crawdad'
  ];

  petsCollected = 300;
  totalPets = 1200;
}
