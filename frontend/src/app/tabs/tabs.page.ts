import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, RouterOutlet } from '@angular/router'; // ✅ import RouterModule

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    IonicModule,
    RouterOutlet,
    RouterModule // ✅ this is the fix
  ],
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {}
