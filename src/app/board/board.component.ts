import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { Field } from './model/field';
import { Player } from '../player/player.interface';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [FieldComponent, PlayerComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  players: Player[] = [
    {
      id: 1,
      name: 'egyeske',
    },
    {
      id: 2,
      name: 'ketteske',
    },
  ];
  readonly fields: (Field | undefined)[] = Array(8)
    .fill(null)
    .map((_, index) => ({ id: index, name: `${index}`, players: [] }) as Field);

  constructor() {
    this.#init();

    this.movePlayer(this.players[0], 2);
  }

  #init() {
    this.fields[0] = {
      id: 0,
      name: '0ik elem',
      players: [...this.players],
    };
  }

  movePlayer(player: Player, move: number) {
    const currentPlayerIndexOnFields = this.#getPlayerFieldIndex(player);
    // TODO statisfies
    const currentField = this.fields[currentPlayerIndexOnFields] as Field;
    this.fields[currentPlayerIndexOnFields] = {
      ...currentField,
      players: currentField.players.filter(
        // TODO js based object comparator
        insidePlayer => player !== insidePlayer,
      ),
    };
    // this.fields[currentPlayerIndexOnFields].players players
    this.fields[currentPlayerIndexOnFields + move] = {
      ...(this.fields[currentPlayerIndexOnFields] as Field),
    };
  }

  #getPlayerFieldIndex({ id }: Player): number {
    return this.fields.findIndex(field =>
      field?.players?.some(player => id === player.id),
    );
  }
}
