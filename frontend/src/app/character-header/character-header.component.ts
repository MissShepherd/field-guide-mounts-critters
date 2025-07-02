import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-character-header',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './character-header.component.html',
  styleUrls: ['./character-header.component.scss']
})
export class CharacterHeaderComponent {
  @Input() name = 'Name';
  @Input() classLevel = 'Class, Level';
  @Input() icon = '/assets/icons/paw.png';
  @Input() avatar = '/assets/your-avatar.png';
}
