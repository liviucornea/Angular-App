import { NoopAnimationPlayer } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SCORE_TRACKER, randomNumber } from './coinflip.utils';

@Component({
  selector: 'app-coinflip',
  templateUrl: './coinflip.component.html',
  styleUrls: ['./coinflip.component.scss']
})

export class CoinflipComponent implements OnInit {
  playerChoice: string = '';
  computerMove: number = 0;
  result: string = '';
  public resultsOnPageMsg = '';
  public scoreOnPageMsg = '';
  private scoreTracker = {...SCORE_TRACKER};

  ngOnInit() {
    const savedScore = localStorage.getItem('savedScore');
    if (savedScore) {
      this.scoreTracker = JSON.parse(savedScore);
    }
    console.log('coinflip component initialized');
  }

  public resetScore():void {
    this.scoreTracker = {...SCORE_TRACKER};
    this.resultsOnPageMsg = `Score has been reset`;
    this.scoreOnPageMsg = `Wins: ${this.scoreTracker.wins}. Losses: ${this.scoreTracker.losses}.`;
  }

  private generateRandomNumber():number {
    return randomNumber();
  }

  public doActionType(actionType: string) {
    //let showResultOnPage = document.getElementById('coinflip-p-result');
    //const showScoreOnPage = document.getElementById('coinflip-p-score');
    this.playerChoice = actionType;
    this.computerMove = this.generateRandomNumber();

    //console.log(this.computerMove);
    //console.log(this.playerChoice);

    if (this.computerMove < 0.5) {
      this.result = 'Heads';
      if (this.result === this.playerChoice) {
        
      }
    } else {
      this.result = 'Tails'
    }
    //console.log(`Result: ${this.result}`);

    if (this.result === this.playerChoice) {
      this.scoreTracker.wins++;
      this.resultsOnPageMsg = `Won. You: ${this.playerChoice}. Pc: ${this.result}`;
      this.scoreOnPageMsg = `Wins: ${this.scoreTracker.wins}. Losses: ${this.scoreTracker.losses}.`;
      ///console.log(`Won. You: ${this.playerChoice}. Pc: ${this.result}`)
    } else {
      this.scoreTracker.losses++;
      this.resultsOnPageMsg = `Lost. You: ${this.playerChoice}. Pc: ${this.result}`;
      this.scoreOnPageMsg = `Wins: ${this.scoreTracker.wins}. Losses: ${this.scoreTracker.losses}.`;
      //console.log(`Lost. You: ${this.playerChoice}. Pc: ${this.result}`)
    }
    localStorage.setItem('savedScore', JSON.stringify(this.scoreTracker));
  }
}
















