// Import the Player class from the Player module
const Player = require('./Player');

// Define the MagicalArena class
class MagicalArena {
    // Static method to roll a six-sided die
    static rollDie() {
        return Math.floor(Math.random() * 6) + 1; // 1 to 6 sided die
    }

    // Static method to simulate a fight between two players
    static fight(attacker, defender) {
        const attackRoll = this.rollDie(); // Attacker's die roll
        const defenseRoll = this.rollDie(); // Defender's die roll

        // Calculate the attack damage and defense strength
        const attackDamage = attacker.attack * attackRoll;
        const defenseStrength = defender.strength * defenseRoll;

        // Calculate the damage taken by the defender
        const damageTaken = Math.max(0, attackDamage - defenseStrength);
        defender.health -= damageTaken; // Reduce defender's health by damage taken

        // Log the results of the fight
        console.log(`Attacker rolls ${attackRoll}, Defender rolls ${defenseRoll}`);
        console.log(`Attack damage: ${attackDamage}, Defense strength: ${defenseStrength}`);
        console.log(`Defender health is reduced by ${damageTaken} to ${defender.health}\n`);
    }

    // Static method to simulate a battle between two players
    static battle(playerA, playerB) {
        // Continue the battle until one player's health drops to zero or below
        while (playerA.health > 0 && playerB.health > 0) {
            // If player A's health is less than player B's, player A attacks first
            if (playerA.health < playerB.health) {
                this.fight(playerA, playerB); // Player A attacks player B
                if (playerB.health <= 0) { // Check if player B is defeated
                    console.log("Player A wins!");
                    break;
                }
                this.fight(playerB, playerA); // Player B attacks player A
                if (playerA.health <= 0) { // Check if player A is defeated
                    console.log("Player B wins!");
                    break;
                }
            } else {
                // If player B's health is less than or equal to player A's, player B attacks first
                this.fight(playerB, playerA); // Player B attacks player A
                if (playerA.health <= 0) { // Check if player A is defeated
                    console.log("Player B wins!");
                    break;
                }
                this.fight(playerA, playerB); // Player A attacks player B
                if (playerB.health <= 0) { // Check if player B is defeated
                    console.log("Player A wins!");
                    break;
                }
            }
        }
    }
}

// Export the MagicalArena class as a module
module.exports = MagicalArena;
