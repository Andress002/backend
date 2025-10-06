import { Request, Response } from 'express';
import * as empresaService from '../services/empresaService';
import { AuthRequest } from '../utils/AuthRequest';
// import { AppError } from '../utils/AppError';


export const crearEmpresaController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const data = {
      ...req.body,
      creadoPor: req.user?._id
    }
    const response = await empresaService.crearEmpresaService(data);
    res.status(201).json({
      message: 'Empresa creada con exito',
      response
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const obtenerEmpresasController = async (
  req: Request,
  res: Response)
  : Promise<void> => {
  try {
    const data = await empresaService.obtenerEmpresasService();
    res.status(200).json({
      message: 'Empresas obtenidas con exito',
      data
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const obtenerEmpresaIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const { id } = req.params;

    const data = await empresaService.obtenerEmpresaPorIdService(id);
    res.status(200).json({
      message: 'Empresa obtenida con exito',
      data
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const actualizarEmpresaController = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const data = {
      ...req.body,
      modificadoPor: req.user?._id
    }
    const response = await empresaService.actualizarEmpresaService(req.params.id, data);
    res.status(200).json({
      message: 'Empresa actualizada con exito',
      response
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};


export const eliminarEmpresaController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const { id } = req.params;

    const data = await empresaService.eliminarEmpresaService(id);

    res.status(200).json({
      message: 'Empresa eliminada con exito',
      data
    })
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

