import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Sign } from 'src/app/interfaces/sign.interface';
import { GameplayService } from 'src/app/services/gameplay.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  @Input() public sign: Sign | null;
  @Input() public disableClick: boolean;
  @Input() public signDisabled: boolean;

  @Output() public removeSign: EventEmitter<Sign | null> = new EventEmitter<Sign | null>();

  constructor(private _gameplayService: GameplayService) { }

  ngOnInit(): void {
  }

  public handleClickSign() {
    if (!this.disableClick) {
      this._gameplayService.addSignInFirstEmptySpace(this.sign);
    } else {
      this.removeSign.emit(this.sign);
    }
  }

}
