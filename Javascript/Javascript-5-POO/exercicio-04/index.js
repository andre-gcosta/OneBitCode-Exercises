const Character = require('./Character.js')
const Mage = require('./Mage.js')
const Thief = require('./Thief.js')
const Warrior = require('./Warrior.js')

const character = new Character('fulano', 100, 20, 10)
const thief = new Thief('ladrao', 100, 50, 10)
const warrior2 = new Warrior('guarda', 120, 60, 40, 30)
const mage = new Mage('velho', 80, 10, 10, 120)

console.table({ character, thief, warrior2, mage })
warrior2.changePosition()
mage.attack(warrior2)
thief.attack(mage)
console.table({ character, thief, warrior2, mage })
warrior2.changePosition()
warrior2.attack(thief)
console.table({ character, thief, warrior2, mage })
mage.heal(mage)
thief.attack(warrior2)
thief.attack(mage)
character.attack(thief)
character.attack(thief)
character.attack(thief)
console.table({ character, thief, warrior2, mage })