import Swordsman from '../swordsman.js';

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