import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-header',
  standalone: true,
  templateUrl: './character-header.component.html',
  styleUrls: ['./character-header.component.scss']
})
export class CharacterHeaderComponent {
  @Input() name = 'Name';
  @Input() classLevel = 'Class, Level';
  @Input() icon = 'assets/icons/paw.png';
  @Input() avatar = 'assets/icons/profile.jpg';
}
