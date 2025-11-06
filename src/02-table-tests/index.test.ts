import { simpleCalculator, Action } from './index';

describe('simpleCalculator', () => {
  test.each([
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: -1, b: 2, action: Action.Add, expected: 1 },

    { a: 5, b: 2, action: Action.Subtract, expected: 3 },
    { a: 0, b: 3, action: Action.Subtract, expected: -3 },

    { a: 2, b: 3, action: Action.Multiply, expected: 6 },
    { a: -2, b: 3, action: Action.Multiply, expected: -6 },

    { a: 6, b: 3, action: Action.Divide, expected: 2 },
    { a: 5, b: 2, action: Action.Divide, expected: 2.5 },

    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
    { a: 5, b: 0, action: Action.Exponentiate, expected: 1 },
  ])(
    'should return $expected for $a and $b with action $action',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 'x', b: 2, action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 1, b: 'y', action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 1, b: 2, action: 'unknown' })).toBeNull();
  });
});
