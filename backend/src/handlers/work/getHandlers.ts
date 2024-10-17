import { Request, Response } from 'express';
import { returnError } from '../../utils/error';
import { prisma } from '../../index';

export async function getAllWorkHandler(req: Request, res: Response): Promise<any> {
  try {
    const items = await prisma.work.findMany();
    const countItems = items.length;

    return res.status(200).json({ success: true, count: countItems, items });
  } catch (error) {
    returnError(res, error);
  }
}
