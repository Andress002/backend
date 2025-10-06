import { Request, Response } from "express";
import * as tipoConsultaService from "../services/tipoConsultaService";
import { AppError } from "../utils/AppError";
import { AuthRequest } from "../utils/AuthRequest";

export const crearTipoConsulta = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const data = {
      ...req.body,
      creadoPor: req.user?._id,
    };
    console.log(data)
    const nuevo = await tipoConsultaService.crearTipoConsulta(data);
    res.status(201).json(nuevo);  
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const listarTipoConsulta = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const lista = await tipoConsultaService.ListarTiposConsulta();
    res.json(lista);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const obtenerTipoConsulta = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const item = await tipoConsultaService.obtenerTipoConsulta(req.params.id);
    if (!item) {
      throw new AppError("No fue encontrado", 404);
    }
    res.json(item);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const actualizarTipoConsulta = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const actualizado = await tipoConsultaService.actualizarTipoConsulta(
      req.params.id,
      req.body
    );
    res.json(actualizado);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const eliminarTipoConsulta = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const eliminar = await tipoConsultaService.eliminarTipoConsulta(req.params.id);
    
    res.status(204).json({
      mensaje: 'Consulta eliminada con exito',
      eliminar
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
