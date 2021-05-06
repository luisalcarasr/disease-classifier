import { getLastEGFRwithClassification } from './getLastEGFRwithClassification';

const data = [
  { eGFR: 65, atDate: '2018/10/31' },
  { eGFR: 70, atDate: '2018/10/20' },
];

test('should show the last eGFR reading, its date and classification string.', () => {
  expect(getLastEGFRwithClassification(data)).toHaveProperty('eGFR');
  expect(getLastEGFRwithClassification(data)).toHaveProperty('atDate');
  expect(getLastEGFRwithClassification(data)).toHaveProperty('classification');
});

test('should throw an error if the array is empty.', () => {
  expect(() => getLastEGFRwithClassification([])).toThrow('The array should not be empty.');
});

test('should throw an error if the param is not an array.', () => {
  expect(() => getLastEGFRwithClassification()).toThrow('The param should be an array.');
  expect(() => getLastEGFRwithClassification(1)).toThrow('The param should be an array.');
  expect(() => getLastEGFRwithClassification('a')).toThrow('The param should be an array.');
  expect(() => getLastEGFRwithClassification(false)).toThrow('The param should be an array.');
});

test('should throw an error if the last record is not a valid object.', () => {
  expect(() => getLastEGFRwithClassification([{}])).toThrow('eGFR must be number.');
});
