import express from 'express';
import { calculateNextPi, getCurrentPi } from './piCalculator';

const app = express();
const port = 3001;

app.get('/pi', (req, res) => {
  const pi = calculateNextPi();
  res.json({ pi });
});

app.get('/circumference', (req, res) => {
  const radiusOfSunKm = 696340; // Radius of the sun in kilometers
  const piValue = getCurrentPi();
  const circumference = 2 * parseFloat(piValue) * radiusOfSunKm;
  res.json({ circumference });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});