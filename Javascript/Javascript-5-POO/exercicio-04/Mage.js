const Character = require("./Character.js");

module.exports = class Mage extends Character {
    constructor(name, healthPoints, attackPoints, defPoints, magicPoints) {
        super(name, healthPoints, attackPoints, defPoints)
        this.magicPoints = magicPoints
    }

    attack(target) {
        target.healthPoints -= (this.attackPoints + this.magicPoints) - target.defPoints
    }

    heal(target) {
        target.healthPoints += this.magicPoints * 2
    }
}