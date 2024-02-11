import Character from '../character.js';

test('Invalid name -> too short', () => {
    expect(
        () => new Character('O', 'Bowsman', 100, 100),
    ).toThrow('Invalid name length');
});