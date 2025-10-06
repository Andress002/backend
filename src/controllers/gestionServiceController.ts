import { Request, Response } from 'express';
import * as gestionService from '../services/GestionService';
import { AuthRequest } from '../utils/AuthRequest';
// import { AppError } from '../utils/AppError';



export const crearServiceController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const data = {
      ...req.body,
      creadoPor: req.user?._id
    }
    const response = await gestionService.crearGestionService(data);

    res.status(201).json({
      message: 'Servicio creado con exito',
      response
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};


export const obtenerServiciosController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await gestionService.obtenerGestionService();

    res.status(201).json({
      message: 'Servicio obtenidos con exito',
      response
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
};


export const obtenerServiciosIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await gestionService.obtenerGestionServiceId(req.params.id);

    res.status(200).json({
      message: 'Servicio obtenido con exito',
      response
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}


export const actualizarServicioController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await gestionService.actualizarGestionService(req.params.id, req.body);

    res.status(200).json({
      message: 'Servicio actualizado con exito',
      response
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
};

export const eliminarServicioController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await gestionService.eliminarGestionService(req.params.id);

    res.status(200).json({
      message: 'Servicio eliminado con exito',
      response
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}