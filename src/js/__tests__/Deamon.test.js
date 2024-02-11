import Deamon from '../deamon.js';

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