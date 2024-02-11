import Character from './character.js';

export default class Deamon extends Character {
    constructor(name, type = 'Deamon') {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}