import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';
import { BlizzardService } from './services/blizzard.service'; // <--- Import your service

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  imports: [IonicModule, RouterOutlet] // <-- Added RouterOutlet import for best practice
})
export class AppComponent implements OnInit {
  constructor(private blizzardService: BlizzardService) {}

  ngOnInit() {
    this.blizzardService.getToken().subscribe({
      next: (data) => {
        // For testing: log the token, or store/use as needed
        console.log('Blizzard access token:', data.access_token);
        // You could also store it as a class property if you want
      },
      error: (err) => {
        console.error('Error fetching token:', err);
      }
    });
  }
}
