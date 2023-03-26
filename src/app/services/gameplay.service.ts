import { Injectable } from '@angular/core';
import { Correctness } from '../interfaces/correctness.interface';
import { Sign } from '../interfaces/sign.interface';

@Injectable({
  providedIn: 'root'
})
export class GameplayService {
  public randomCombination: Sign[];

  public availableSigns: Sign[] = [
    { id: 1, name: 'knight', icon: '♞', color: '#3498DB' },
    { id: 2, name: 'club', icon: '♧', color: '#2C3E50' },
    { id: 3, name: 'spade', icon: '♤', color: '#2C3E50' },
    { id: 4, name: 'heart', icon: '♡', color: '#E74C3C' },
    { id: 5, name: 'diamond', icon: '♢', color: '#E74C3C' },
    { id: 6, name: 'star', icon: '★', color: '#F1C40F' }
  ];

  public tryOneCombination: (Sign | null)[] = [null, null, null, null];
  public tryTwoCombination: (Sign | null)[] = [null, null, null, null];
  public tryThreeCombination: (Sign | null)[] = [null, null, null, null];
  public tryFourCombination: (Sign | null)[] = [null, null, null, null];
  public tryFiveCombination: (Sign | null)[] = [null, null, null, null];
  public trySixCombination: (Sign | null)[] = [null, null, null, null];

  public currentTry: number = 0;

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
        return;
      }
    }
  }

  public removeSignFromCombination(sign: Sign | null, indexOfCombination: number, indexInCombination: number) {
    this.allCombinations[indexOfCombination][indexInCombination] = null;
    return;
  }

  public increaseCurrentTry() {
    this.currentTry++;
  }

  public saveRandomCombination() {
    this.randomCombination = this._getRadnomCombination();
  }

  public checkCorectnessOfCombination(indexInCombination: number): Correctness {
    const combinationToCheck = this.allCombinations[indexInCombination];
    let correctAndInPlace = 0;
    let correntAndNotInPlace = 0;
    let notCorrect = 0;

    this.randomCombination.forEach((sign, index) => {
      if (sign.id === combinationToCheck[index]?.id) {
        correctAndInPlace++;
      }
      if (!combinationToCheck.some(s => s?.id === sign.id)) {
        notCorrect++;
      }
    });

    correntAndNotInPlace = 4 - correctAndInPlace - notCorrect;

    return {
      correctAndInPlace,
      correntAndNotInPlace,
      notCorrect
    }
  }

  private _getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  private _getRadnomCombination(): Sign[] {
    return [null, null, null, null].map(() => {
      const rn = this._getRandomNumber();
      const sign = this.availableSigns.find(sign => sign.id === rn);
      return sign || this.availableSigns[0];
    });
  }
}
