import validateCardNumber from '../src/scripts/validateCardNumber';
import getCardType from '../src/scripts/getCardType';

test('Validates card numbers correctly', () => {
  expect(validateCardNumber('4111111111111111')).toBe(true); 
  expect(validateCardNumber('1234567890123456')).toBe(false); 
});

test('Detects card types correctly', () => {
  expect(getCardType('4111111111111111')).toBe('Visa');
  expect(getCardType('5111111111111118')).toBe('MasterCard');
  expect(getCardType('2200111122223333')).toBe('Mir');
});
