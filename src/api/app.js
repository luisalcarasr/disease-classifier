import cors from 'cors';
import express, { json } from 'express';
import { getHypertensionStage } from '../utils/getHypertensionStage';
import { getKidneyDiseaseClassification } from '../utils/getKidneyDiseaseClassification';
import { db } from './database';
import validationMiddleware from './middlewares/validation';
import addBloodPressure from './validators/addBloodPressure.validator';

const app = express();

app.use(json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/blood-pressures', (req, res) => {
  db.all('SELECT * FROM BLOOD_PRESSURES ORDER BY atDate DESC', [], (error, bloodPressures) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json(bloodPressures);
    }
  });
});

app.get('/blood-pressures/last', (req, res) => {
  db.get('SELECT * FROM BLOOD_PRESSURES ORDER BY atDate DESC', [], (error, bloodPressure) => {
    if (error) {
      res.status(500).json(error);
    } else {
      if (bloodPressure) {
        bloodPressure.classification = getHypertensionStage(bloodPressure.SysBP, bloodPressure.DiaBP);
        res.json(bloodPressure);
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    }
  });
});

app.post('/blood-pressures', addBloodPressure, validationMiddleware, (req, res) => {
  const bp = req.body;
  db.run(
    'INSERT INTO BLOOD_PRESSURES (SysBP, DiaBP, atDate) VALUES(?, ?, ?)',
    [bp.SysBP, bp.DiaBP, bp.atDate],
    (results, error) => {
      if (!error) {
        res.status(201).json(bp);
      } else {
        res.status(500).json(error);
      }
    }
  );
});

app.get('/e-gfr', (req, res) => {
  db.all('SELECT * FROM E_GFR ORDER BY atDate DESC', [], (error, rates) => {
    if (error) {
      res.statusCode(500);
      res.json(error);
    } else {
      res.json(rates);
    }
  });
});

app.get('/e-gfr/last', (req, res) => {
  db.get('SELECT * FROM E_GFR ORDER BY atDate DESC', [], (error, rate) => {
    if (error) {
      res.statusCode(500);
      res.json(error);
    } else {
      rate.classification = getKidneyDiseaseClassification(rate.eGFR);
      res.json(rate);
    }
  });
});

app.post('/e-gfr', (req, res) => {
  const rate = req.body;
  db.run('INSERT INTO E_GFR (eGFR, atDate) VALUES(?, ?)', [rate.eGFR, rate.atDate], (result, error) => {
    if (!error) {
      res.status(201).json(rate);
    } else {
      res.statusCode(500);
      res.json(error);
    }
  });
});

export { app };
