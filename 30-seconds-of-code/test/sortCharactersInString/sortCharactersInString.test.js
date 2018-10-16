const expect = require('expect');
const sortCharactersInString = require('./sortCharactersInString.js');

test('sortCharactersInString is a Function', () => {
  expect(sortCharactersInString).toBeInstanceOf(Function);
});
test('Alphabetically sorts the characters in a string.', () => {
  expect(sortCharactersInString('cabbage')).toBe('aabbceg');
});
