const sut = require('../index').parse;

test('parse function exists', () => {
  expect(sut).toBeDefined();
});

test('parse returns an empty array for invalid input', () => {
  const result = sut('foo');
  expect(result).toStrictEqual([]);
});
