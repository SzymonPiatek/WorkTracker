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
