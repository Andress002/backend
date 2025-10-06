import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

interface JwtPayload {
  _id: string;
  nit: number,
  rol: 'admin' | 'user';
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
}


export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;


  if (!authHeader?.startsWith('Bearer ')) {
    throw new AppError('No estas autorizado. Token faltante' , 401)
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload 

    req.user = decoded
    next()  
  } catch (error) {
    return res.status(401).json({
      mensaje: 'Token invalido o expirado'
    })
  }
};




