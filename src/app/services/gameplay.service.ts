import { Injectable } from '@angular/core';
import { Sign } from '../interfaces/sign.interface';

@Injectable({
  providedIn: 'root'
})
export class GameplayService {
  public availableSigns: Sign[] = [
    { id: 1, name: 'name1', icon: 'android', color: '#82E0AA' },
    { id: 2, name: 'name2', icon: 'favorite', color: '#F1948A' },
    { id: 3, name: 'name3', icon: 'thumb_up', color: '#E59866' },
    { id: 4, name: 'name4', icon: 'add', color: '#BB8FCE' },
    { id: 5, name: 'name5', icon: 'mail', color: '#85C1E9' },
    { id: 6, name: 'name6', icon: 'insert_emoticon', color: '#F7DC6F' },
  ];

  public tryOneCombination: (Sign | null)[] = [null, null, null, null];
  public tryTwoCombination: (Sign | null)[] = [null, null, null, null];
  public tryThreeCombination: (Sign | null)[] = [null, null, null, null];
  public tryFourCombination: (Sign | null)[] = [null, null, null, null];
  public tryFiveCombination: (Sign | null)[] = [null, null, null, null];
  public trySixCombination: (Sign | null)[] = [null, null, null, null];

  public get allCombinations() {
    return [
      this.tryOneCombination,
      this.tryTwoCombination,
      this.tryThreeCombination,
      this.tryFourCombination,
      this.tryFiveCombination,
      this.trySixCombination
    ]
  }

  constructor() {
  }

  public addSignInFirstEmptySpace(sign: Sign | null) {
    for (const combination of this.allCombinations) {
      const indexOfFirstEmpty = combination.indexOf(null);
      if (indexOfFirstEmpty !== -1) {
        combination[indexOfFirstEmpty] = sign;
        console.log(combination);
        return;
      }
    }
  }

  public removeSignFromCombination(sign: Sign | null, indexOfCombination: number, indexInCombination: number) {
    this.allCombinations[indexOfCombination][indexInCombination] = null;
    return;
  }
}
