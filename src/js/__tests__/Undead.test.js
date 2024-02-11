import Undead from '../undead.js';

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