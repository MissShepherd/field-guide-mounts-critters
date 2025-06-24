import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {
  private currentPath = '';

  constructor(private router: Router) {}

  reloadTab(path: string) {
    if (this.currentPath === path) {
      // Navigate to a dummy route first to force reload
      this.router.navigateByUrl('/empty', { skipLocationChange: true }).then(() => {
        this.router.navigateByUrl(path);
      });
    } else {
      this.currentPath = path;
    }
  }
}
