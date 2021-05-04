import { isNumber } from 'lodash';

/**
 *
 * @param {sysBP, diaBP, atDate} BloodPressure Blood Pressure
 * @returns
 */
const getHypertensionStage = (sysBP, diaBP) => {
  if (!isNumber(sysBP)) throw new Error('sysBP must be number.');
  if (!isNumber(diaBP)) throw new Error('diaBP must be number.');

  let stage = 'No Hypertension';
  if (sysBP >= 180 && diaBP >= 120) {
    stage = 'Stage 3';
  } else if ((sysBP >= 160 && sysBP < 180) || (diaBP >= 100 && diaBP < 110)) {
    stage = 'Stage 2';
  } else if ((sysBP >= 140 && sysBP < 160) || (diaBP >= 90 && diaBP < 100)) {
    stage = 'Stage 1';
  }
  return stage;
};

export { getHypertensionStage };
