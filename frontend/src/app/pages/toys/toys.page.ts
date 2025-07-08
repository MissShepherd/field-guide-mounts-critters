import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CharacterHeaderComponent } from 'src/app/components/character-header/character-header.component';

@Component({
  selector: 'app-toys',
  standalone: true,
  imports: [IonicModule, CommonModule, CharacterHeaderComponent],
  templateUrl: './toys.page.html',
  styleUrls: ['./toys.page.scss'],
})
export class ToysPage {
  toys = [
    'Piccolo of the Flaming Fire',
    'Magic Pet Mirror',
    'Disco Ball',
    'Train Wrecker',
    'Toy Train Set',
    'Ethereal Portal',
    'Narain\'s Scrying Scroll',
    'Goblin Gumbo Kettle',
    'Grizzlemaw Tooth',
    'Wisp Amulet',
  ];
}
