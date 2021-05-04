import { isNumber } from 'lodash';

const getKidneyDiseaseClassification = (eGFR) => {
  if (!isNumber(eGFR)) throw new Error('eGFR must be number.');
  let classification = 'Kidney Failure';
  if (eGFR >= 90) {
    classification = 'Normal';
  } else if (eGFR >= 60 && eGFR <= 89) {
    classification = 'Mildly Decreased';
  } else if (eGFR >= 45 && eGFR <= 59) {
    classification = 'Mild to Moderate';
  } else if (eGFR >= 30 && eGFR <= 44) {
    classification = 'Moderate to Severe';
  } else if (eGFR >= 15 && eGFR <= 29) {
    classification = 'Severely Decreased';
  }
  return classification;
};

export { getKidneyDiseaseClassification };
