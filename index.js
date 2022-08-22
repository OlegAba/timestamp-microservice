import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import logger from './api/logger.js';
import apiRoute from './api/routes.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Middleware
app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static(__dirname + '/public'));
app.use(logger);
app.use('/api', apiRoute);

const listener = app.listen(PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});