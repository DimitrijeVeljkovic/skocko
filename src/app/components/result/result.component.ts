import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Correctness } from 'src/app/interfaces/correctness.interface';
import { Sign } from 'src/app/interfaces/sign.interface';
import { GameplayService } from 'src/app/services/gameplay.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() public combination: (Sign | null)[];
  @Input() public indexOfCombination: number;
  @Output() public disableCombination: EventEmitter<boolean> = new EventEmitter<boolean>();
  public buttonClicked: boolean;
  public correctness: Correctness;

  public get disableButton() {
    return this.combination.includes(null);
  }

  public get correctAndInPlace(): any[] {
    return Array(this.correctness.correctAndInPlace);
  }

  public get correctAndNotInPlace(): any[] {
    return Array(this.correctness.correntAndNotInPlace);
  }

  public get notCorrect(): any[] {
    return Array(this.correctness.notCorrect);
  }

  constructor(private _gameplayService: GameplayService) { }

  ngOnInit(): void {
  }

  public handleCheck() {
    this.buttonClicked = true;
    this.disableCombination.emit(true);
    this._gameplayService.increaseCurrentTry();
    this.correctness = this._gameplayService.checkCorectnessOfCombination(this.indexOfCombination);
  }

}
