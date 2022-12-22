import {parse as sut} from '../index';

import.meta.jest.useFakeTimers();

test('parse function exists', () => {
  expect(sut).toBeDefined();
});

test('it returns an empty array for invalid input', () => {
  const result = sut('foo');

  expect(result).toStrictEqual([]);
});

test('it returns an array for each element', () => {
  const cronExpression = '* * * * * *';
  const expected = ['*', '*', '*', '*', '*', '*'];

  const result = sut(cronExpression);

  expect(result).toStrictEqual(expected);
});
