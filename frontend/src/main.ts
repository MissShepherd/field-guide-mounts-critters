import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BlizzardService } from './services/blizzard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule],
  template: `<ion-app><ion-router-outlet></ion-router-outlet></ion-app>`,
})
export class AppComponent implements OnInit {
  constructor(private blizzardService: BlizzardService) {}

  ngOnInit() {
    this.blizzardService.getToken().subscribe({
      next: (data) => {
        console.log('Blizzard access token:', data.access_token);
      },
      error: (err) => {
        console.error('Error fetching token:', err);
      }
    });
  }
}
