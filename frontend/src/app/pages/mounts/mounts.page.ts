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
    'Fiery Warhorse',
    'Acherus Deathcharger',
    'Violet Spellwing',
    'Frostbrood Vanquisher',
    'Grand Expedition Yak',
    'Lucid Nightmare',
    'Time-Lost Proto-Drake',
    'Pureblood Fire Hawk',
    'Headless Horseman\'s Mount',
    'Onyxian Drake',
    'Ashenvale Chimaera',
    'Ironhoof Destroyer',
    'Kor\'kron Juggernaut',
    'Obsidian Worldbreaker',
    'Spectral Steed',
    'Bloodfang Widow',
    'Warlord\'s Deathwheel',
    'Prestigious Azure Courser'
  ];

  mountsCollected = 120;
  totalMounts = 600;
}
