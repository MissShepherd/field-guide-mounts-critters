import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  mounts = [
    {
      name: 'Invincible',
      image: 'https://wow.zamimg.com/uploads/screenshots/normal/907610.jpg',
      description: 'The steed of Arthas Menethil, raised in undeath.',
    },
    {
      name: 'Ashes of Al\'ar',
      image: 'https://wow.zamimg.com/uploads/screenshots/normal/867678.jpg',
      description: 'A phoenix of unmatched beauty and power.',
    },
    {
      name: 'Rivendare\'s Deathcharger',
      image: 'https://wow.zamimg.com/uploads/screenshots/normal/954163.jpg',
      description: 'A rare undead warhorse from Stratholme.',
    },
  ];
}
