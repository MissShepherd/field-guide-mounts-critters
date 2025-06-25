import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router'; // ✅ use RouterOutlet, not RouterModule
import { BlizzardService } from './services/blizzard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, RouterOutlet], // ✅ RouterOutlet, not RouterModule here
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `
})
export class AppComponent {
  constructor(private blizzardService: BlizzardService) {}

  ngOnInit() {
    this.blizzardService.getToken().subscribe({
      next: (data) => console.log('Blizzard access token:', data.access_token),
      error: (err) => console.error('Error fetching token:', err)
    });
  }
}
