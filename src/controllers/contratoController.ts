import { Request, Response } from 'express';
import * as contratoService from '../services/contratoService';
import { AppError } from '../utils/AppError';
import { AuthRequest } from '../utils/AuthRequest';

export const crearContratoController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    if (!req.user?._id) {
      res.status(401).json({ mensaje: 'Usuario no autenticado' });
      return;
    }

    const data = { ...req.body, creadoPor: req.user._id };
    const contrato = await contratoService.crearContratoService(data);

    res.status(201).json({
      mensaje: 'Contrato creado con éxito',
      contrato,
    });
  } catch (err: any) {
    const status = err.statusCode || 500;
    res.status(status).json({ mensaje: err.message });
  }
};

export const obtenerContratosController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contratos = await contratoService.obtenerContratosService();
    res.status(200).json(contratos);
  } catch (err: any) {
    const status = err.statusCode || 500;
    res.status(status).json({ mensaje: err.message });
  }
};

export const obtenerContratoController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contrato = await contratoService.obtenerContratoService(req.params.id);
    if (!contrato) {
      res.status(404).json({ mensaje: 'Contrato no encontrado' });
      return;
    }
    res.status(200).json(contrato);
  } catch (err: any) {
    const status = err.statusCode || 500;
    res.status(status).json({ mensaje: err.message });
  }
};

export const actualizarContratoController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contratoActualizado = await contratoService.actulizarContratosService(
      req.params.id,
      req.body
    );
    if (!contratoActualizado) {
      res.status(404).json({ mensaje: 'Contrato no encontrado' });
      return;
    }
    res.status(200).json({
      mensaje: 'Contrato actualizado con éxito',
      contrato: contratoActualizado,
    });
  } catch (err: any) {
    const status = err.statusCode || 500;
    res.status(status).json({ mensaje: err.message });
  }
};

export const eliminarContratoController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const contratoEliminado = await contratoService.eliminarContratoService(req.params.id);
    if (!contratoEliminado) {
      res.status(404).json({ mensaje: 'Contrato no encontrado' });
      return;
    }
    res.status(200).json({
      mensaje: 'Contrato eliminado con éxito',
      contrato: contratoEliminado,
    });
  } catch (err: any) {
    const status = err.statusCode || 500;
    res.status(status).json({ mensaje: err.message });
  }
};