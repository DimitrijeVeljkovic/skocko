import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Sign } from 'src/app/interfaces/sign.interface';
import { GameplayService } from 'src/app/services/gameplay.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() public combination: (Sign | null)[];
  @Output() public disableCombination: EventEmitter<boolean> = new EventEmitter<boolean>();
  public buttonClicked: boolean;

  public get disableButton() {
    return this.combination.includes(null);
  }

  constructor(private _gameplayService: GameplayService) { }

  ngOnInit(): void {
  }

  public handleCheck() {
    this.buttonClicked = true;
    this.disableCombination.emit(true);
    this._gameplayService.increaseCurrentTry();
  }

}
