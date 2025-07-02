import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-header.component.html',
  styleUrls: ['./character-header.component.scss']
})
export class CharacterHeaderComponent {
  @Input() name: string = 'Name';
  @Input() classLevel: string = 'Class, Level';
  @Input() icon: string = 'assets/icons/mount_icon.png';
  @Input() avatar: string = 'assets/icons/home.png';
}
