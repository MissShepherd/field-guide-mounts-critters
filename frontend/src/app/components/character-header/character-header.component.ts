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
  @Input() name!: string;
  @Input() classLevel!: string;
  @Input() avatar!: string;
  @Input() icon!: string;
}
