import { Request, Response } from "express";
import * as tipoCitaService from '../services/tipoCitaService';
import { AppError } from "../utils/AppError";
import { AuthRequest } from "../utils/AuthRequest";

export const createTipoCita = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const data = {
      ...req.body,
      creadoPor: req.user?._id

    }
    const cita = await tipoCitaService.crearTipoCita(data);
    res.status(201).json(cita);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const listarTipoCitas = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const citas = await tipoCitaService.ListarTiposCita();
    res.json(citas);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const obtenerTipoCita = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cita = await tipoCitaService.obtenerTipoCita(req.params.id);
    if (!cita) {
      throw new AppError('No se encontro la cita', 404);
    }
    res.json(cita);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const actualizarTipoCita = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cita = await tipoCitaService.actualizarTipoCita(req.params.id, req.body);
    res.json(cita);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const eliminarTipoCita = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cita = await tipoCitaService.eliminarTipoCita(req.params.id);
    if (cita) {
      res.status(200).json({ message: 'Cita eliminada con éxito' });
    } else {
      throw new AppError('Cita no encontrada', 404);
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
