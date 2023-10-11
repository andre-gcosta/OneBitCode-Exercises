const Character = require("./Character.js")

module.exports = class Warrior extends Character {
    constructor(name, healthPoints, attackPoints, defPoints, shieldPoints) {
        super(name, healthPoints, attackPoints, defPoints)
        this.shieldPoints = shieldPoints
        this.position = 'attack'
    }

    attack(target) {
        if (this.position == 'attack') {
            super.attack(target)
        }
    }

    changePosition() {
        if (this.position === 'defense') {
            this.position = 'attack'
            this.defPoints -= this.shieldPoints
        } else 
        if (this.position === 'attack') {
            this.position = 'defense'
            this.defPoints += this.shieldPoints
        }
    }
}