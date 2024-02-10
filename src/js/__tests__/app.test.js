import Character from '../character.js';
import Bowsman from '../bowsman.js';
import Deamon from '../deamon.js';
import Mage from '../mage.js';
import Swordsman from '../swordsman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

test('Invalid name -> too short', () => {
    expect(
        () => new Character('O', 'Bowsman', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid name -> too long', () => {
    expect(
        () => new Character('LooooooongName', 'Daemon', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid character type', () => {
    expect(
        () => new Character('Bowy', 'FakeBowsman', 100, 100),
    ).toThrow('Invalid character type');
});

test('Bowsman', () => {
    const bowsman = new Bowsman('GreenArrow');
    expect(bowsman).toEqual({
        name: 'GreenArrow',
        type: 'Bowsman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('Deamon', () => {
    const deamon = new Deamon('Lilit');
    expect(deamon).toEqual({
        name: 'Lilit',
        type: 'Deamon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('Mage', () => {
    const mage = new Mage('Cristal');
    expect(mage).toEqual({
        name: 'Cristal',
        type: 'Mage',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('Swordsman', () => {
    const swordsman = new Swordsman('Artas');
    expect(swordsman).toEqual({
        name: 'Artas',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test('Undead', () => {
    const undead = new Undead('Death');
    expect(undead).toEqual({
        name: 'Death',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('Zombie', () => {
    const zombie = new Zombie('Cranby');
    expect(zombie).toEqual({
        name: 'Cranby',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});