export interface GameParsedModel {
  games: GameModel[];
  ranking: object;
}

interface GameModel {
  total_kills: number;
  players: string[];
  kills: object;
  death_cause: object;
}
