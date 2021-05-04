import { getLastBloodPressureWithStage } from './getLastBloodPressureWithStage';

const bloodPressures = [
  { SysBP: 120, DiaBP: 90, atDate: '2018/10/31' },
  { SysBP: 115, DiaBP: 100, atDate: '2018/10/20' },
];

test('should have an a property called classification', () => {
  const bp = getLastBloodPressureWithStage(bloodPressures);
  expect(bp).toHaveProperty('classification');
  expect(bp.classification).toBe('Stage 1');
});

test('should have an a property called classification', () => {
  const bp = getLastBloodPressureWithStage(bloodPressures);
  expect(bp).toHaveProperty('atDate');
  expect(bp.atDate).toBe('2018/10/31');
});

test('should throw an error if it is not receving an array.', () => {
  const message = 'Param must be an array.';
  expect(() => getLastBloodPressureWithStage({})).toThrowError(message);
  expect(() => getLastBloodPressureWithStage(1)).toThrowError(message);
  expect(() => getLastBloodPressureWithStage('a')).toThrowError(message);
  expect(() => getLastBloodPressureWithStage(false)).toThrowError(message);
});
