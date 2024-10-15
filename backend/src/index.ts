import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes';
import { PrismaClient } from '@prisma/client';
import { returnError } from './utils/error';

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

async function getAllHandler(req: Request, res: Response): Promise<Response> {
  try {
    const items = await prisma.work.findMany();
    const countItems = items.length;

    return res.status(200).json({ success: true, count: countItems, items });
  } catch (error) {
    return returnError(res, error);
  }
}
app.get('/api/v1/work/', getAllHandler);

app.listen(backendPort, () => {
  console.log(`Server is running on http://${host}:${backendPort}`);
});
