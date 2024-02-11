import Character from './character.js';

export default class Bowsman extends Character {
    constructor(name, type = 'Bowsman') {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}