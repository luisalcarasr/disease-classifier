import { check } from 'express-validator';

const addRate = [
  check('eGFR').exists().withMessage('eGFR is required.').isNumeric().withMessage('eGFR should be a number.'),
  check('atDate')
    .exists()
    .withMessage('atDate is required.')
    .isDate({ format: 'YYYY/MM/DD' })
    .withMessage('atDate should be a date.'),
];

export default addRate;
