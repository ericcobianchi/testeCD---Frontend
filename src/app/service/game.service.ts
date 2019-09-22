import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameParsedModel } from '../model/gameParsed.model';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  public gameLogParsed = {};

  constructor(private http: HttpClient) {}

  public getGame() {
    return this.http.get<GameParsedModel>('http://localhost:3000/');
  }
}
