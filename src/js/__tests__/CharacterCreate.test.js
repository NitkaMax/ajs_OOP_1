import Character from '../character.js';

test('Invalid character type', () => {
    expect(
        () => new Character('Bowy', 'FakeBowsman', 100, 100),
    ).toThrow('Invalid character type');
});