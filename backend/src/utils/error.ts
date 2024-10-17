import { Response } from 'express';

export function returnError(res: Response, err: any): Response {
  console.error(err);
  return res.status(500).json({ success: false, message: 'Internal Server Error', error: err });
}
