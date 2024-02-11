import Character from './character.js';

export default class Mage extends Character {
    constructor(name, type = 'Mage') {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}