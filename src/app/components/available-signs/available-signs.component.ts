import { Component, OnInit } from '@angular/core';
import { GameplayService } from 'src/app/services/gameplay.service';

@Component({
  selector: 'app-available-signs',
  templateUrl: './available-signs.component.html',
  styleUrls: ['./available-signs.component.scss']
})
export class AvailableSignsComponent implements OnInit {
  public get availableSigns() {
    return this._gameplayService.availableSigns;
  }

  public get shouldDisableButtons() {
    return this._gameplayService.allCombinations[this._gameplayService.currentTry].every(sign => sign !== null);
  }

  constructor(private _gameplayService: GameplayService) { }

  ngOnInit(): void {
  }

}
