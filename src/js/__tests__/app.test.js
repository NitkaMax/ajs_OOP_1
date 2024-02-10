import Character from '../character.js';
import Bowsmen from '../bowsman.js';
import Deamon from '../deamon.js';
import Mage from '../mage.js';
import Swordsman from '../swordman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

test('Invalid name -> too short', () => {
    expect(
        () => new Character('Cringe', 'Archibald', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid name -> too long', () => {
    expect(
        () => new Character('Dambldore', 'Daemon', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid character type', () => {
    expect(
        () => new Character('Archibald', 'FakeBowman', 100, 100),
    ).toThrow('Invalid character type');
});

test('Bowsmen', () => {
    const bowsman = new Bowsmen('Archibald');
    expect(bowsman).toEqual({
        name: 'Archibald',
        type: 'Bowsmen',
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
        attack: 20,
        defence: 40,
    });
});

test('Mage', () => {
    const mage = new Mage('Girmiona');
    expect(mage).toEqual({
        name: 'Girmiona',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 20,
    });
});

test('Swordsman', () => {
    const swordsman = new Swordsman('Artas');
    expect(swordsman).toEqual({
        name: 'Artas',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 30,
        defence: 50,
    });
});

test('Undead', () => {
    const undead = new Undead('Undieng');
    expect(undead).toEqual({
        name: 'Undieng',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('Zombie', () => {
    const zombie = new Zombie('Cranberies');
    expect(zombie).toEqual({
        name: 'Cranberies',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 30,
        defence: 15,
    });
});