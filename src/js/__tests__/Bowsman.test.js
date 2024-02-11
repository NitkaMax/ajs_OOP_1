import Bowsman from '../bowsman.js';

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