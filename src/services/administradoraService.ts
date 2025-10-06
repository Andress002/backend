import Administradora, { IAdministradora } from '../models/administradora.model';
import { Types } from 'mongoose';
import { AppError } from '../utils/AppError';

export const crearAdministradora = async (data: Partial<IAdministradora>): Promise<IAdministradora> => {
  try {
    return await Administradora.create(data);
  } catch (error: any) {
    throw new AppError('Error al crear la administradora', 400);
  }
};

export const obtenerAdministradorasService = async (): Promise<IAdministradora[]> => {
  try {
    return await Administradora.find().populate('contrato').exec();
  } catch (error) {
    throw new AppError('Error al obtener las administradoras', 400);
  }
};

export const obtenerAdministradoraPorIdService = async (
  id: Types.ObjectId | string
): Promise<IAdministradora | null> => {
  try {
    return await Administradora.findById(id).populate('contrato').exec();
  } catch (error) {
    throw new AppError('Error al obtener la administradora', 400);
  }
};

export const actualizarAdministradoraService = async (
  id: Types.ObjectId | string,
  data: Partial<IAdministradora>
): Promise<IAdministradora | null> => {
  try {
    return await Administradora.findByIdAndUpdate(id, data, { new: true }).populate('contrato').exec();
  } catch (error) {
    throw new AppError('Error al actualizar la administradora', 400);
  }
};

export const eliminarAdministradoraService = async (
  id: Types.ObjectId | string,
): Promise<IAdministradora | null> => {
  try {
    return await Administradora.findByIdAndDelete(id);
  } catch (error) {
    throw new AppError('Error al eliminar la administradora', 400);
  }
};

 
