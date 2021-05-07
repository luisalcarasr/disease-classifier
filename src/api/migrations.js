import { db } from './database';

const createBloodPressuresTable = () => {
  db.run('CREATE TABLE BLOOD_PRESSURES ( SysBP REAL, DiaBP REAL, atDate TEXT)');
};

const createEGFRTable = () => {
  db.run('CREATE TABLE E_GFR ( eGFR REAL, atDate TEXT)');
};

const migrate = () => {
  createBloodPressuresTable();
  createEGFRTable();
};

migrate();
