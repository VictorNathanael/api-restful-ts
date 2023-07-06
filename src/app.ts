require('dotenv').config();
import express from 'express';
import config from 'config';
import db from '../config/db';
import router from './router';

const app = express();

app.use(express.json());

app.use('/api/', router);

const port = config.get<number>('port');

app.listen(3000, async () => {
    await db();

    console.log(`Aplicação está funcionando na porta: ${port}`);
});
