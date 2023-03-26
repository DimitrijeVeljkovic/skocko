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

  constructor(private _gameplayService: GameplayService) { }

  ngOnInit(): void {
  }

}
