import { getEGFRDrop } from './getEGFRdrop';

test('should calculate the eGFR drop.', () => {
  expect(getEGFRDrop(100, 80)).toBe(0.2);
  expect(getEGFRDrop(120, 80)).toBe(0.33);
  expect(getEGFRDrop(150, 90)).toBe(0.4);
  expect(getEGFRDrop(20, 82)).toBe(-3.1);
  expect(getEGFRDrop(38, 24)).toBe(0.37);
});
