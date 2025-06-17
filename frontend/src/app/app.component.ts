import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // ✅ this is missing
import { BlizzardService } from './services/blizzard.service';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  imports: [IonicModule, RouterModule] // ✅ include RouterModule here
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
