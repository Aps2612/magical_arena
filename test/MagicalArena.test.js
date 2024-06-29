// test/MagicalArena.test.js
const assert = require('assert');
const Player = require('../Player');
const MagicalArena = require('../MagicalArena');

describe('MagicalArena', function() {
    it('should reduce defender health when attacked', function() {
        const playerA = new Player(50, 5, 10);
        const playerB = new Player(50, 5, 10);

        MagicalArena.fight(playerA, playerB);
        assert(playerB.health < 50);
    });

    it('should correctly identify a winner', function() {
        const playerA = new Player(50, 5, 10);
        const playerB = new Player(10, 2, 2);

        MagicalArena.battle(playerA, playerB);
        assert(playerB.health <= 0);
        assert(playerA.health > 0);
    });
});
