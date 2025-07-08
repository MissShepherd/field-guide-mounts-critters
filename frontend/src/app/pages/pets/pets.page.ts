import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CharacterHeaderComponent } from 'src/app/components/character-header/character-header.component';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [IonicModule, CommonModule, CharacterHeaderComponent],
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
})
export class PetsPage {
  pets = [
    'Grunty',
    'Mini Tyrael',
    'Crawling Claw',
    'Lil’ KT',
    'Murky',
    'Spectral Tiger Cub',
    'Zeradar',
    'Bananas',
    'Cinder Kitten',
    'Tuskarr Kite',
  ];
}
