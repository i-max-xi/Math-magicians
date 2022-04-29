import operate from '../Components/logic/Operate';

describe('operation tests', () => {
    test('sum', () => {
      expect(operate(1, 2, '+')).toBe('3');
    });
    test('subtract', () => {
      expect(operate(1, 2, '-')).toBe('-1');
    });
    test('divide', () => {
      expect(operate(1, 2, '÷')).toBe('0.5');
    });
    test('multiply', () => {
      expect(operate(1, 2, 'x')).toBe('2');
    });
    test('modulo', () => {
      expect(operate(2, 5, '%')).toBe('2');
    });
  });