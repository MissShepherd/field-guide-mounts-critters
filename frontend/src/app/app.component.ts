import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';
import { BlizzardService } from './services/blizzard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, RouterOutlet],
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `
})
export class AppComponent implements OnInit {
  constructor(private blizzardService: BlizzardService) {}

  ngOnInit() {
    this.blizzardService.getToken().subscribe({
      next: (data: any) => {
        console.log('Blizzard access token:', data.access_token);
      },
      error: (err: any) => {
        console.error('Error fetching token:', err);
      }
    });
  }
}
