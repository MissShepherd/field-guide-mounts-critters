import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tabs',
  imports: [IonicModule, RouterModule],
  templateUrl: './tabs.page.html'
})
export class TabsPage {}
