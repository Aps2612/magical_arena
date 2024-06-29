// MagicalArena.js
const Player = require('./Player');

class MagicalArena {
    static rollDie() {
        return Math.floor(Math.random() * 6) + 1; // 1 to 6 sided die
    }

    static fight(attacker, defender) {
        const attackRoll = this.rollDie();
        const defenseRoll = this.rollDie();

        const attackDamage = attacker.attack * attackRoll;
        const defenseStrength = defender.strength * defenseRoll;

        const damageTaken = Math.max(0, attackDamage - defenseStrength);
        defender.health -= damageTaken;

        console.log(`Attacker rolls ${attackRoll}, Defender rolls ${defenseRoll}`);
        console.log(`Attack damage: ${attackDamage}, Defense strength: ${defenseStrength}`);
        console.log(`Defender health is reduced by ${damageTaken} to ${defender.health}\n`);
    }

    static battle(playerA, playerB) {
        while (playerA.health > 0 && playerB.health > 0) {
            if (playerA.health < playerB.health) {
                this.fight(playerA, playerB);
                if (playerB.health <= 0) {
                    console.log("Player A wins!");
                    break;
                }
                this.fight(playerB, playerA);
                if (playerA.health <= 0) {
                    console.log("Player B wins!");
                    break;
                }
            } else {
                this.fight(playerB, playerA);
                if (playerA.health <= 0) {
                    console.log("Player B wins!");
                    break;
                }
                this.fight(playerA, playerB);
                if (playerB.health <= 0) {
                    console.log("Player A wins!");
                    break;
                }
            }
        }
    }
}

module.exports = MagicalArena;
