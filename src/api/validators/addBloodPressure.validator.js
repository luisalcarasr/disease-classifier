import { check } from 'express-validator';

const addBloodPressure = [
  check('SysBP').exists().withMessage('SysBP is required.').isNumeric().withMessage('SysBP should be a number.'),
  check('DiaBP').exists().withMessage('DiaBP is required.').isNumeric().withMessage('DiaBP should be a number.'),
  check('atDate')
    .exists()
    .withMessage('atDate is required.')
    .isDate({ format: 'YYYY/MM/DD' })
    .withMessage('atDate should be a date.'),
];

export default addBloodPressure;
