import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [IonicModule, CommonModule, RouterOutlet],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}
