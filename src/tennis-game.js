'use strict';

export default class TennisGame {

    constructor() {
        this.player1 = 0;
        this.player2 = 0;
        this.scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    }

    scorePlayer1() {
        this.player1 ++;
    }

    scorePlayer2() {
        this.player2 ++;
    }

    score() {
        if ((this.player1 === this.player2) && (this.player1 > 2) && (this.player2 > 2)) {
            return 'Deuce';
        } else if ((this.player1 > 2) && (this.player2 > 2) && (this.player1 == this.player2 + 1)){
            return 'Advantage player1';
        } else if ((this.player1 > 2) && (this.player2 > 2) && (this.player2 == this.player1 + 1)){
            return 'Advantage player2';
        } else if ((this.player1 > 2) && (this.player2 > 2) && (this.player1 == this.player2 + 2)) {
            return 'Win player1';
        } else if ((this.player1 > 2) && (this.player2 > 2) && (this.player2 == this.player1 + 2)) {
            return 'Win player2';
        } else if ((this.player2 < 3) && (this.player1 === 4)) {
            return 'Win player1';
        } else if ((this.player1 < 3) && (this.player2 === 4)) {
            return 'Win player2';
        } else {
            return `${this.scores[this.player1]}-${this.scores[this.player2]}`;
        }
    }

}