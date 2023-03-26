import { Component, Input, OnInit } from '@angular/core';
import { Sign } from 'src/app/interfaces/sign.interface';
import { GameplayService } from 'src/app/services/gameplay.service';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss']
})
export class CombinationComponent implements OnInit {
  @Input() public combination: (Sign | null)[]; 
  @Input() public indexOfCombination: number;
  public combinationDisabled: boolean;

  constructor(private _gameplayService: GameplayService) { }

  ngOnInit(): void {
  }

  public removeSignFromCombination(sign: Sign | null, indexInCombination: number) {
    this._gameplayService.removeSignFromCombination(sign, this.indexOfCombination, indexInCombination);
  }

  public disableCombination(disable: boolean) {
    this.combinationDisabled = disable;
  }

}
