import { Component } from '@angular/core';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public ranking = [];

  constructor(private gameService: GameService) {
    this.getGameParsed();
  }

  public async getGameParsed() {
    await this.gameService.getGame().subscribe(gameParsed => {
      this.ranking = Object.entries(gameParsed.ranking);
      console.log(this.ranking);
    });
  }
}
