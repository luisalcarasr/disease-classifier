import { getHypertensionStage } from './getHypertensionStage';

test('should be No Hypertension if BP has SysBP at 120 and DiaBP at 80.', () => {
  expect(getHypertensionStage(120, 80)).toBe('No Hypertension');
});

test('should be Stage 1 if BP has SysBP at 120 and DiaBP at 90.', () => {
  expect(getHypertensionStage(120, 90)).toBe('Stage 1');
});

test('should be Stage 2 if BP has SysBP at 120 and DiaBP at 90.', () => {
  expect(getHypertensionStage(115, 100)).toBe('Stage 2');
});

test('should be Stage 3 if BP has SysBP at 180 and DiaBP at 120.', () => {
  expect(getHypertensionStage(180, 120)).toBe('Stage 3');
});

test('should throw an error if the SysBP is not a number.', () => {
  expect(() => getHypertensionStage('115', 120)).toThrowError('sysBP must be number.');
});

test('should throw an error if DiaPB is not a number.', () => {
  expect(() => getHypertensionStage(115, '120')).toThrowError('diaBP must be number.');
});
