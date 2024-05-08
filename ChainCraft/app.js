import express from 'express';
import bodyParser from 'body-parser';
import blockchainRoutes from './routes/blockchainRoutes.js';
import winston from 'winston';

const app = express();
const PORT = 3000;

const logger = winston.createLogger({
  level: 'error',
  transports: [
    new winston.transports.File({ filename: './logs/error.log' })
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  )
});

app.use(bodyParser.json());

app.use('/api', blockchainRoutes);

app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).send({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
