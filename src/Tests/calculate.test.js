import calculate from '../Components/logic/Calculate';

describe('Testing for the operate buttons', () => {
  test('Testing with AC buttton', () => {
    const obj = {
      total: 2,
      next: 4,
      operation: null,
    };
    const results = calculate(obj, 'AC');
    expect(results.total).toBe(null);
  });

  test('Testing with + buttton', () => {
    const obj = {
      total: 2,
      next: 4,
      operation: '+',
    };
    const results = calculate(obj, '+');
    expect(parseInt(results.total)).toBe(6);
  });
  test('Testing with - buttton', () => {
    const obj = {
      total: 2,
      next: 4,
      operation: '-',
    };
    const results = calculate(obj, '-');
    expect(parseInt(results.total)).toBe(-2);
  });

  test('Testing with x buttton', () => {
    const obj = {
      total: 2,
      next: -4,
      operation: 'x',
    };
    const results = calculate(obj, 'x');
    expect(parseInt(results.total)).toBe(-8);
  });

  test('Testing with = buttton', () => {
    const obj = {
      total: null,
      next: null,
      operation: '=',
    };
    const results = calculate(obj, '=');
    expect(parseInt(results.total)).toBe(NaN);
  });
});