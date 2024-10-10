import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes';
import { PrismaClient } from '@prisma/client';

const app = express();
const backendPort = process.env.BACKEND_PORT;
const frontendPort = process.env.FRONTEND_PORT;
const host = process.env.HOST;

export const prisma = new PrismaClient();

app.use(express.json());
app.use(
  cors({
    origin: [`http://${host}:${frontendPort}`, `http://${host}`],
    methods: 'GET,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

app.get('/', async (req: Request, res: Response) => {
  res.json({ success: true, message: 'Hello from backend' });
});

app.use('/api/v1', apiRoutes);

app.listen(backendPort, () => {
  console.log(`Server is running on http://${host}:${backendPort}`);
});
