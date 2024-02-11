import Zombie from '../zombie.js';

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