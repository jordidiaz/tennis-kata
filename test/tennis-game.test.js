'use strict';

import test from 'tape';

import TennisGame from '../src/tennis-game';

test('TennisGame player1', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should have a player1 property with 0 value';

    const actual = tennisGame.player1;
    const expected = 0;

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame player2', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should have a player2 property with 0 value';

    const actual = tennisGame.player2;
    const expected = 0;

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame score', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should have a scores property with values';

    const actual = tennisGame.scores;
    const expected = ['Love', 'Fifteen', 'Thirty', 'Forty'];

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame scorePlayer1', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should have a scorePlayer1 function that updates the score';

    tennisGame.scorePlayer1();

    const actual = tennisGame.player1;
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame scorePlayer2', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should have a scorePlayer2 function that updates the score';

    tennisGame.scorePlayer2();

    const actual = tennisGame.player2;
    const expected = 1;

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame score', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should have a score function that returns the score text';

    const actual = tennisGame.score();
    const expected = 'Love-Love';

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame score + player2', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should have a score function that returns the score text';

    tennisGame.scorePlayer2();

    const actual = tennisGame.score();
    const expected = 'Love-Fifteen';

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame deuce', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should show deuce if the two players have the same score from Forty';

    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();

    const actual = tennisGame.score();
    const expected = 'Deuce';

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame deuce 2', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should show deuce if the two players have the same score from Forty';

    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();

    const actual = tennisGame.score();
    const expected = 'Deuce';

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame Advantage player1', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should show Advantage player1 if the two players were in deuce and player1 scores';

    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();

    const actual = tennisGame.score();
    const expected = 'Advantage player1';

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame Advantage player2', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should show Advantage player2 if the two players were in deuce and player2 scores';

    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();

    const actual = tennisGame.score();
    const expected = 'Advantage player2';

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame Win player1 after deuce', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should show Win player1 if the two players were in deuce and player1 scores two times';

    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();

    const actual = tennisGame.score();
    const expected = 'Win player1';

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame Win player2 deuce', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should show Win player2 if the two players were in deuce and player2 scores two times';

    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();

    const actual = tennisGame.score();
    const expected = 'Win player2';

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame Win player1 normal', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should show Win player1 if the player2 is bellow forty and player1 is in forty and scores';

    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    tennisGame.scorePlayer1();
    
    tennisGame.scorePlayer2();

    const actual = tennisGame.score();
    const expected = 'Win player1';

    assert.same(actual, expected, msg);
    assert.end();
});

test('TennisGame Win player2 normal', assert => {

    const tennisGame = new TennisGame();

    const msg = 'should show Win player2 if the player1 is bellow forty and player2 is in forty and scores';

    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    tennisGame.scorePlayer2();
    
    tennisGame.scorePlayer1();

    const actual = tennisGame.score();
    const expected = 'Win player2';

    assert.same(actual, expected, msg);
    assert.end();
});