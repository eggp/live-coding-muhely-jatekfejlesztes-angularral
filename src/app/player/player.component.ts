import { Component, Input, OnInit } from '@angular/core';
import { Player } from './player.interface';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  @Input({ required: true }) player!: Player;
}
