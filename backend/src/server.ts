import express from 'express';
import cors from 'cors'; // Import cors middleware
import { calculateNextPi, getCurrentPi } from './piCalculator';

const app = express();
const port = 3001;

// Use cors middleware to enable CORS
app.use(cors());

app.get('/pi', (req, res) => {
  const { pi, iterations } = calculateNextPi();
  res.json({ pi, iterations });
});

app.get('/circumference', (req, res) => {
  const radiusOfSunKm = 696340; // Radius of the sun in kilometers
  const { pi, iterations } = getCurrentPi();
  const circumference = 2 * parseFloat(pi) * radiusOfSunKm;
  res.json({ circumference, pi, iterations, radiusOfSunKm });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});