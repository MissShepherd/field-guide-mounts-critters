import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home', // must match what Angular tries to use
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage {}
