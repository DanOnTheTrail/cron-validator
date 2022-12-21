const sut = require('../index').validate;

test('validate function exists', () => {
  expect(sut).toBeDefined();
});

test('it returns VALID for a valid expression', () => {
  const expected = 'VALID';

  const result = sut('* * * * * *');

  expect(result).toBe(expected);
});

test('it returns INVALID_LENGTH when the length is wrong', () => {
  const expected = 'INVALID_LENGTH';

  const result = sut('* *');

  expect(result).toBe(expected);
});
