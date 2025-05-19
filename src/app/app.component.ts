import { Component } from '@angular/core';
import { IonApp, IonToolbar, IonHeader, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonContent, IonTitle, IonHeader, IonToolbar, IonApp, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mounts = [
    {
      name: 'Invincible',
      image: 'https://wow.zamimg.com/uploads/screenshots/normal/907610.jpg',
      description: 'The steed of Arthas Menethil, raised in undeath.'
    },
    {
      name: 'Ashes of Al\'ar',
      image: 'https://wow.zamimg.com/uploads/screenshots/normal/867678.jpg',
      description: 'A phoenix of unmatched beauty and power.'
    },
    {
      name: 'Rivendare\'s Deathcharger',
      image: 'https://wow.zamimg.com/uploads/screenshots/normal/954163.jpg',
      description: 'A rare undead warhorse from Stratholme.'
    }
  ];
}
