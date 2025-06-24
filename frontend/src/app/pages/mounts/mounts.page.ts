import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mounts',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './mounts.page.html',
  styleUrls: ['./mounts.page.scss'],
})
export class MountsPage {
  data: any;

  ionViewWillEnter() {
    this.loadData(); // ✅ this runs every time the tab is activated
  }

  loadData() {
    console.log('Reloading mounts data...');
    // fetch your Blizzard API data or reset the view
  }
}
