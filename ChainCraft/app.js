import express from 'express';
import bodyParser from 'body-parser';
import blockchainRoutes from './routes/blockchainRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', blockchainRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
