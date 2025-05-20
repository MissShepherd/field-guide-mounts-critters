import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [IonicModule, CommonModule],
  template: `
    <p class="description">✅ Welcome to the Field Guide home page!</p>
  `
})
export class HomePage {}
