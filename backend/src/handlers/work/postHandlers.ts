import { Request, Response } from 'express';
import Joi from 'joi';
import { returnError } from '../../utils/error';
import { prisma } from '../../index';

const workSchema = Joi.object({
  isEntry: Joi.boolean().required(),
  timestamp: Joi.date().optional(),
});

export async function postWorkHandler(req: Request, res: Response): Promise<any> {
  try {
    const { error } = workSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    const { isEntry, timestamp } = req.body;

    const workTimestamp = timestamp ? new Date(timestamp) : new Date();

    const currentDate = workTimestamp.toISOString().split('T')[0];

    const latestEntry = await prisma.work.findFirst({
      where: {
        timestamp: {
          gte: new Date(currentDate + 'T00:00:00Z'),
          lt: new Date(currentDate + 'T23:59:59Z'),
        },
      },
      orderBy: {
        timestamp: 'desc',
      },
    });

    if (latestEntry) {
      if (latestEntry.isEntry === isEntry) {
        return res
          .status(400)
          .json({ success: false, message: `${isEntry ? 'You are already at work' : 'You are already left work'}` });
      }
    }

    const newWork = await prisma.work.create({
      data: {
        isEntry,
        timestamp: workTimestamp,
      },
    });

    return res.status(201).json({ success: true, message: 'Work created', work: newWork });
  } catch (error) {
    returnError(res, error);
  }
}
