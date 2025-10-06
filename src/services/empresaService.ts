import Empresa, { IEmpresa } from "../models/empresa.model";
import { CrearEmpresaDTO } from "../types/Empresa.dto";
import { Types } from "mongoose";
import { empresaSchema } from "../types/auth.schemas";
import { AppError } from "../utils/AppError";


export const crearEmpresaService = async (
  data: CrearEmpresaDTO
): Promise<IEmpresa> => {
  try {

    const { error } = empresaSchema.validate(data);

    if (error) {
      throw new AppError(error.details[0].message, 400);
    }

    const empresa = await Empresa.create(data);
    return empresa;

  } catch (err: any) {

    throw new AppError(err.message || "Error al crear la empresa", 500);
  }
};

export const obtenerEmpresasService = async (): Promise<IEmpresa[]> => {
  try {
    return await Empresa.find().exec();
  } catch (err: any) {
    throw new AppError(err.message || 'Error al obtener las empresas', 400);
  }
};

export const obtenerEmpresaPorIdService = async (
  id: Types.ObjectId | string
): Promise<IEmpresa | null> => {
  try {

    if (!Types.ObjectId.isValid(id)) {
      throw new AppError('ID de empresa invalido', 400);
    }

    const empresa = await Empresa.findById(id).exec();

    if (!empresa) {
      throw new AppError('Empresa no encontrada', 404);
    }
    return empresa;

  } catch (err: any) {
    throw new AppError('Error al obtener la empresa', 500);
  }
};

export const actualizarEmpresaService = async (
  id: Types.ObjectId | string,
  data: Partial<CrearEmpresaDTO>
): Promise<IEmpresa | null> => {
  try {
    return await Empresa.findByIdAndUpdate(id, data, { new: true }).exec();
  } catch (err: any) {
    throw new AppError('Error al actualizar la empresa', 400);
  }
};

export const eliminarEmpresaService = async (
  id: Types.ObjectId | string
): Promise<IEmpresa | null> => {
  try {

    if (!Types.ObjectId.isValid(id)) {
      throw new AppError('ID de empresa invalido', 400);
    }
    return await Empresa.findByIdAndDelete(id);
  } catch (err: any) {
    throw new AppError('Error al eliminar la empresa', 400);
  }
};