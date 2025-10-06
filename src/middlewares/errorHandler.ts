import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`[Error]:  ${err.message}`);
  res.status(err.statusCode || 500).json({
    mensaje: err.message || 'Error en el servidor'
  })
};