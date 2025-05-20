import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<ion-app><router-outlet /></ion-app>`,
  imports: [IonicModule, RouterOutlet]
})
export class AppComponent {}
