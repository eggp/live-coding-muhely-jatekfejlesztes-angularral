import { Player } from '../../player/player.interface';

export interface Field {
  id: number;
  name: string;
  players: Player[];
}
