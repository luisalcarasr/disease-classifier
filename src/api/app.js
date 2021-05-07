import express, { json } from 'express';

const app = express();

app.use(json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

export { app };
