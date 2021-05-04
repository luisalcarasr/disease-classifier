import { clone, isArray, isNaN, sortBy } from 'lodash';
import { getHypertensionStage } from './getHypertensionStage';

const getLastBloodPressureWithStage = (bloodPressures) => {
  if (!isArray(bloodPressures)) throw new Error('Param must be an array.');
  const sortedBloodPressures = sortBy(bloodPressures, 'atDate', (bloodPressure) => {
    if (isNaN(new Date(bloodPressure.atDate).getTime())) throw new Error('atDate must be a date.');
    return bloodPressure;
  });
  const lastBloodPressure = clone(sortedBloodPressures[sortedBloodPressures.length - 1]);
  lastBloodPressure.classification = getHypertensionStage(lastBloodPressure.SysBP, lastBloodPressure.DiaBP);
  return lastBloodPressure;
};

export { getLastBloodPressureWithStage };
