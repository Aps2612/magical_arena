// main.js
const Player = require('./Player');
const MagicalArena = require('./MagicalArena');

function main() {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);

    MagicalArena.battle(playerA, playerB);
}

main();
