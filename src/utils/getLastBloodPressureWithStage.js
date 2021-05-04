import { isArray, sortBy } from 'lodash';
import { getHypertensionStage } from './getHypertensionStage';

const getLastBloodPressureWithStage = (bloodPressures) => {
  if (!isArray(bloodPressures)) throw new Error('Param must be an array.');
  bloodPressures = sortBy(bloodPressures, 'atDate');
  const lastBloodPressure = bloodPressures[bloodPressures.length - 1];
  lastBloodPressure.classification = getHypertensionStage(lastBloodPressure.SysBP, lastBloodPressure.DiaBP);
  return lastBloodPressure;
};

export { getLastBloodPressureWithStage };
