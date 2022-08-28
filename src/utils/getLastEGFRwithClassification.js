import { clone, isArray, sortBy } from 'lodash-es';
import { getKidneyDiseaseClassification } from './getKidneyDiseaseClassification';

const getLastEGFRwithClassification = (data) => {
  if (!isArray(data)) throw new Error('The param should be an array.');
  if (data.length === 0) throw new Error('The array should not be empty.');
  const sortedData = sortBy(data, 'atDate');
  const lastRecord = clone(sortedData[sortedData.length - 1]);
  lastRecord.classification = getKidneyDiseaseClassification(lastRecord.eGFR);
  return lastRecord;
};

export { getLastEGFRwithClassification };
