import { getKidneyDiseaseClassification } from './getKidneyDiseaseClassification';

test('should be Normal if eGFR is greater than or equal to 90 (inclusive).', () => {
  const classification = 'Normal';
  expect(getKidneyDiseaseClassification(90)).toBe(classification);
  expect(getKidneyDiseaseClassification(99)).toBe(classification);
  expect(getKidneyDiseaseClassification(154)).toBe(classification);
  expect(getKidneyDiseaseClassification(192)).toBe(classification);
  expect(getKidneyDiseaseClassification(200)).toBe(classification);
});

test('should be Mildly Decreased if eGFR is between 60 and 89 (all inclusive).', () => {
  const classification = 'Mildly Decreased';
  expect(getKidneyDiseaseClassification(60)).toBe(classification);
  expect(getKidneyDiseaseClassification(73)).toBe(classification);
  expect(getKidneyDiseaseClassification(80)).toBe(classification);
  expect(getKidneyDiseaseClassification(84)).toBe(classification);
  expect(getKidneyDiseaseClassification(89)).toBe(classification);
});

test('should be Mild to Moderate if eGFR is between 45 and 59 (all inclusive).', () => {
  const classification = 'Mild to Moderate';
  expect(getKidneyDiseaseClassification(45)).toBe(classification);
  expect(getKidneyDiseaseClassification(46)).toBe(classification);
  expect(getKidneyDiseaseClassification(49)).toBe(classification);
  expect(getKidneyDiseaseClassification(53)).toBe(classification);
  expect(getKidneyDiseaseClassification(59)).toBe(classification);
});

test('should be Moderate to Severe if eGFR is between 30 and 44 (all inclusive).', () => {
  const classification = 'Moderate to Severe';
  expect(getKidneyDiseaseClassification(30)).toBe(classification);
  expect(getKidneyDiseaseClassification(35)).toBe(classification);
  expect(getKidneyDiseaseClassification(38)).toBe(classification);
  expect(getKidneyDiseaseClassification(42)).toBe(classification);
  expect(getKidneyDiseaseClassification(44)).toBe(classification);
});

test('should be Severely Decreased if eGFR is between 15 and 29 (all inclusive).', () => {
  const classification = 'Severely Decreased';
  expect(getKidneyDiseaseClassification(15)).toBe(classification);
  expect(getKidneyDiseaseClassification(17)).toBe(classification);
  expect(getKidneyDiseaseClassification(23)).toBe(classification);
  expect(getKidneyDiseaseClassification(25)).toBe(classification);
  expect(getKidneyDiseaseClassification(29)).toBe(classification);
});

test('should be Moderate to Severe if eGFR is everything else.', () => {
  const classification = 'Kidney Failure';
  expect(getKidneyDiseaseClassification(-99)).toBe(classification);
  expect(getKidneyDiseaseClassification(0)).toBe(classification);
  expect(getKidneyDiseaseClassification(5)).toBe(classification);
  expect(getKidneyDiseaseClassification(10)).toBe(classification);
  expect(getKidneyDiseaseClassification(14)).toBe(classification);
});

test('should throw a error if eGFR is not a number.', () => {
  const message = 'eGFR must be number.';
  expect(() => getKidneyDiseaseClassification('9')).toThrow(message);
  expect(() => getKidneyDiseaseClassification(false)).toThrow(message);
  expect(() => getKidneyDiseaseClassification(/a/)).toThrow(message);
  expect(() => getKidneyDiseaseClassification([])).toThrow(message);
  expect(() => getKidneyDiseaseClassification({})).toThrow(message);
});
