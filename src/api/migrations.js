import { db } from './database';

const createBloodPressuresTable = () => {
  db.run('CREATE TABLE BLOOD_PRESSURES ( SysBP REAL, DiaBP REAL, atDate TEXT)');
};

const migrate = () => {
  createBloodPressuresTable();
};

migrate();
