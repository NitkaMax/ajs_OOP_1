import Mage from '../mage.js';

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