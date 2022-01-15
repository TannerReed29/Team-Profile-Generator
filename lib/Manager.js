/* /* TODO: Rewrite ENGINEER INTERN MANAGER
class Manager {
    constructor(name, id, email, officeNum) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum;
    }
    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail() {
        return this.email
    }
    getOffice() {
        return `Office Number: ${this.officeNum}`
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;

/* TODO USE TO REWRITE
const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();
  }

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

module.exports = Enemy;
*/