import { Response, NextFunction } from 'express';
import { AuthRequest } from '../utils/AuthRequest';

export const checkRol = (req: AuthRequest, res: Response, next: NextFunction) => {

  
  if (!req.user || req.user.rol !== 'admin') {
    return res.status(403).json({ mensaje: 'Acceso denegado. Solo administradores.' });
  }
  next();
};





