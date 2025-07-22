import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CharacterHeaderComponent } from 'src/app/components/character-header/character-header.component';

@Component({
  selector: 'app-more',
  standalone: true,
  imports: [IonicModule, CommonModule, CharacterHeaderComponent],
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss']
})
export class MorePage {
  // Optional: settings logic
  selectedTheme: string = 'dark';
  notificationsEnabled: boolean = true;

  syncData() {
    console.log('Syncing data...');
    // Add actual sync logic here
  }

  toggleTheme(event: any) {
    this.selectedTheme = event.detail.value;
    console.log('Theme changed to:', this.selectedTheme);
    // Add theme logic here
  }

  toggleNotifications(event: any) {
    this.notificationsEnabled = event.detail.checked;
    console.log('Notifications enabled:', this.notificationsEnabled);
    // Add notification toggle logic here
  }
}
