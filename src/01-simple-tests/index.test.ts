// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const a = 5;
    const b = 10;

    expect(simpleCalculator({ a, b, action: Action.Add })).toBe(15);
  });

  test('should subtract two numbers', () => {
    const a = 10;
    const b = 5;

    expect(simpleCalculator({ a, b, action: Action.Subtract })).toBe(5);
  });

  test('should multiply two numbers', () => {
    const a = 10;
    const b = 5;

    expect(simpleCalculator({ a, b, action: Action.Multiply })).toBe(50);
  });

  test('should divide two numbers', () => {
    const a = 10;
    const b = 5;

    expect(simpleCalculator({ a, b, action: Action.Divide })).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const a = 5;
    const b = 2;

    expect(simpleCalculator({ a, b, action: Action.Exponentiate })).toBe(25);
  });

  test('should return null for invalid action', () => {
    const a = 10;
    const b = 5;

    expect(simpleCalculator({ a, b, action: '1' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const a = 's';
    const b = 'lorem';

    expect(simpleCalculator({ a, b, action: Action.Add })).toBeNull();
  });
});
