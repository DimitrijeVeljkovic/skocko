import { Component, OnInit } from '@angular/core';
import { GameplayService } from 'src/app/services/gameplay.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {

  public get allCombinations() {
    return this._gameplayService.allCombinations;
  }

  constructor(private _gameplayService: GameplayService) { }

  ngOnInit(): void {
  }

}
