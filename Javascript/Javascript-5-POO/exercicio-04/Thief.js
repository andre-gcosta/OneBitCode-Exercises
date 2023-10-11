const Character = require("./Character.js");

module.exports = class Thief extends Character {
    constructor(name, healthPoints, attackPoints, defPoints) {
        super(name, healthPoints, attackPoints, defPoints)
    }

    attack(target) {
        target.healthPoints -= (this.attackPoints - target.defPoints) * 2
    }
}