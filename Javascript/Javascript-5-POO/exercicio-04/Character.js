module.exports = class Character {
    constructor(name, healthPoints, attackPoints, defPoints) {
        this.name = name
        this.healthPoints = healthPoints
        this.attackPoints = attackPoints
        this.defPoints = defPoints
    }

    attack(target) {
        target.healthPoints -= this.attackPoints - target.defPoints
    }
}