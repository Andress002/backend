import Contrato, { IContrato } from "../models/contrato.model";
import { contrato } from "../types/contrato.dto";
import { AppError } from "../utils/AppError";
import { Types } from "mongoose";


export const crearContratoService = async (data: Partial<contrato>): Promise<IContrato> => {
  try {
    const nuevoContrato = await Contrato.create(data);
    return nuevoContrato;
  } catch (err: any) {
    throw new AppError('Error al crear un  nuevo contrato', 400);
  }
};



export const obtenerContratosService = async (): Promise<IContrato[]> => {
  try {
    return await Contrato.find();
  } catch (err: any) {
    throw new AppError('Error para obtener los contratos', 400);
  }
};


export const obtenerContratoService = async (id: Types.ObjectId | string): Promise<IContrato | null> => {
  try {
    return await Contrato.findById(id); 
  } catch (err: any) {
    throw new AppError('Error para conseguir el contrato', 400);
  }
};


export const actulizarContratosService = async (
  id: Types.ObjectId | string, data: Partial<contrato>): Promise<IContrato | null>  => {
  try {
    return await Contrato.findByIdAndUpdate(id, data, {new: true});
    
  } catch (err: any) {
    throw new AppError('Error al actualizar el contrato', 400);
  }
};

export const eliminarContratoService = async (id: Types.ObjectId | string): Promise<IContrato | null> => {
  try {
    const deleteContrato = await Contrato.findByIdAndDelete(id);

    return deleteContrato;

  } catch (err: any) {
    throw new AppError('Error para eliminar el contrato' , 400);
  }
};


