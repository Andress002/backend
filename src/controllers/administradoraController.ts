import { Request, Response } from 'express';
import * as administradoraService from '../services/administradoraService';
import { AuthRequest } from '../utils/AuthRequest';

export const crearAdministradoraController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user?._id) {
      res.status(401).json({ mensaje: 'Usuario no autenticado' });
      return;
    }

    const data = { ...req.body, creadoPor: req.user._id };
    const nuevaAdministradora = await administradoraService.crearAdministradora(data);

    res.status(201).json({
      mensaje: 'Administradora creada con éxito',
      datos: nuevaAdministradora,
    });
  } catch (err: any) {
    const status = err.statusCode || 500;
    res.status(status).json({ mensaje: err.message });
  }
};

export const obtenerAdministradorasController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const administradoras = await administradoraService.obtenerAdministradorasService();
    res.status(200).json(administradoras);
  } catch (err: any) {
    const status = err.statusCode || 500;
    res.status(status).json({ mensaje: err.message });
  }
};

export const obtenerAdministradoraPorIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const administradora = await administradoraService.obtenerAdministradoraPorIdService(req.params.id);
    if (!administradora) {
      res.status(404).json({ mensaje: 'Administradora no encontrada' });
      return;
    }
    res.status(200).json(administradora);
  } catch (err: any) {
    const status = err.statusCode || 500;
    res.status(status).json({ mensaje: err.message });
  }
};

export const actualizarAdministradoraController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { creadoPor, ...resto } = req.body; 
    const administradoraActualizada = await administradoraService.actualizarAdministradoraService(
      req.params.id,
      resto
    );

    if (!administradoraActualizada) {
      res.status(404).json({ mensaje: 'Administradora no encontrada' });
      return;
    }

    res.status(200).json({
      mensaje: 'Administradora actualizada con éxito',
      datos: administradoraActualizada,
    });
  } catch (err: any) {
    const status = err.statusCode || 500;
    res.status(status).json({ mensaje: err.message });
  }
};

export const eliminarAdministradoraController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const administradoraEliminada = await administradoraService.eliminarAdministradoraService(req.params.id);
    if (!administradoraEliminada) {
      res.status(404).json({ mensaje: 'Administradora no encontrada' });
      return;
    }
    res.status(200).json({
      mensaje: 'Administradora eliminada con éxito',
      datos: administradoraEliminada,
    });
  } catch (err: any) {
    const status = err.statusCode || 500;
    res.status(status).json({ mensaje: err.message });
  }
};