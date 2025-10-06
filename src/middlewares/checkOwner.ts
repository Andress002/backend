// middlewares/checkOwnership.ts

import { AuthRequest } from '../utils/AuthRequest';
import { Response, NextFunction } from 'express';
import mongoose from 'mongoose';

export const checkOwner = (modelName: string, field: string = 'creadoPor') => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?._id;

      if (!userId) {
        return res.status(401).json({ mensaje: 'Usuario no autenticado' });
      }

      const Model = mongoose.model(modelName); 
      const resource = await Model.findById(req.params.id);

      if (!resource) {
        return res.status(404).json({ mensaje: `${modelName} no encontrado` });
      }

      const esCreador = resource[field]?.toString() === userId.toString();
      const esAdmin = req.user?.rol === 'admin';

      if (!esCreador && !esAdmin) {
        return res.status(403).json({
          mensaje: `No tienes permiso para realizar esta accion. solo los administradores`,
        });
      }

      (req as any).resource = resource;

      next();
    } catch (error: any) {
      res.status(500).json({ mensaje: error.message });
    }
  };
};

















/* import { Response, NextFunction } from 'express';
import { AuthRequest } from '../utils/AuthRequest';
import * as contratoService from '../services/contratoService';

export const checkOwner = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const contrato = await contratoService.obtenerContratoService(req.params.id);

    if (!contrato) {
      return res.status(404).json({ mensaje: 'Contrato no encontrado' });
    }

    const userId = req.user?._id;

    const esCreador = contrato.creadoPor?.toString() === userId?.toString();
    const esAdmin = req.user?.rol === 'admin';

    if (!esCreador && !esAdmin) {
      return res.status(403).json({
        mensaje: 'No tienes permiso para realizar esta acción',
      });
    }

    next();
  } catch (error: any) {
    res.status(500).json({ mensaje: error.message });
  }
};


 */