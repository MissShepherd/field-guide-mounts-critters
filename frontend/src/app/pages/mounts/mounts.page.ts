import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CharacterHeaderComponent } from '../../components/character-header/character-header.component';

@Component({
  selector: 'app-mounts',
  standalone: true,
  imports: [IonicModule, CommonModule, CharacterHeaderComponent],
  templateUrl: './mounts.page.html',
  styleUrls: ['./mounts.page.scss']
})
export class MountsPage {
mounts = [
  'Ashes of Al\'ar',
  'Invincible',
  'Swift Spectral Tiger',
  'Rivendare\'s Deathcharger',
  'Heavenly Onyx Cloud Serpent',
  'Mimiron\'s Head',
  'Celestial Steed',
  'Time-Lost Proto-Drake',
  'Armored Bloodwing',
  'Obsidian Worldbreaker',
  'Voidtalon of the Dark Star',
  'Felfire Hawk',
  'Ironhoof Destroyer',
  'Abyss Worm',
  'Glacial Tidestorm',
  'Reins of the Long-Forgotten Hippogryph',
  'Thundering Ruby Cloud Serpent',
  'Mecha-Mogul Mk2',
  'Pureblood Fire Hawk',
  'Violet Spellwing',
  'Felsteel Annihilator',
  'Experiment 12-B',
  'Smoldering Ember Wyrm',
  'Ny’alotha Allseer',
  'Sharkbait',
  'War-Bred Tauralus',
  'Swift Zulian Tiger',
  'Clutch of Ji-Kun',
  'Spectral Charger',
  'Plagued Proto-Drake'
];
}
