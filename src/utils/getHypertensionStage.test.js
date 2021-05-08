import { getHypertensionStage } from './getHypertensionStage';

test('should be No Hypertension.', () => {
  expect(getHypertensionStage(120, 80)).toBe('No Hypertension');
  expect(getHypertensionStage(110, 75)).toBe('No Hypertension');
  expect(getHypertensionStage(100, 70)).toBe('No Hypertension');
  expect(getHypertensionStage(90, 65)).toBe('No Hypertension');
  expect(getHypertensionStage(80, 60)).toBe('No Hypertension');
});

test('should be Stage 1.', () => {
  expect(getHypertensionStage(140, 90)).toBe('Stage 1');
  expect(getHypertensionStage(151, 90)).toBe('Stage 1');
  expect(getHypertensionStage(159, 90)).toBe('Stage 1');
  expect(getHypertensionStage(120, 90)).toBe('Stage 1');
  expect(getHypertensionStage(120, 99)).toBe('Stage 1');
});

test('should be Stage 2.', () => {
  expect(getHypertensionStage(160, 100)).toBe('Stage 2');
  expect(getHypertensionStage(162, 102)).toBe('Stage 2');
  expect(getHypertensionStage(170, 104)).toBe('Stage 2');
  expect(getHypertensionStage(115, 108)).toBe('Stage 2');
  expect(getHypertensionStage(110, 109)).toBe('Stage 2');
});

test('should be Stage 3', () => {
  expect(getHypertensionStage(180, 121)).toBe('Stage 3');
  expect(getHypertensionStage(185, 122)).toBe('Stage 3');
  expect(getHypertensionStage(190, 123)).toBe('Stage 3');
  expect(getHypertensionStage(195, 124)).toBe('Stage 3');
  expect(getHypertensionStage(200, 125)).toBe('Stage 3');
});

test('should throw an error if the SysBP is not a number.', () => {
  expect(() => getHypertensionStage('115', 120)).toThrowError('sysBP must be number.');
});

test('should throw an error if DiaPB is not a number.', () => {
  expect(() => getHypertensionStage(115, '120')).toThrowError('diaBP must be number.');
});
