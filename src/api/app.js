import express, { json } from 'express';
import { getHypertensionStage } from '../utils/getHypertensionStage';
import { db } from './database';

const app = express();

app.use(json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/blood-pressures', (req, res) => {
  db.all('SELECT * FROM BLOOD_PRESSURES ORDER BY atDate DESC', [], (error, bloodPressures) => {
    if (error) {
      res.statusCode(500);
      res.json(error);
    }
    res.json(bloodPressures);
  });
});

app.get('/blood-pressures/last', (req, res) => {
  db.get('SELECT * FROM BLOOD_PRESSURES ORDER BY atDate DESC', [], (error, bloodPressure) => {
    if (error) {
      res.statusCode(500);
      res.json(error);
    }
    bloodPressure.classification = getHypertensionStage(bloodPressure.SysBP, bloodPressure.DiaBP);
    res.json(bloodPressure);
  });
});

app.post('/blood-pressures', (req, res) => {
  const bp = req.body;
  db.run(
    'INSERT INTO BLOOD_PRESSURES (SysBP, DiaBP, atDate) VALUES(?, ?, ?)',
    [bp.SysBP, bp.DiaBP, bp.atDate],
    (results, error) => {
      if (!error) {
        res.statusCode(201);
        res.json(bp);
      } else {
        res.statusCode(500);
        res.json(error);
      }
    }
  );
});

export { app };
