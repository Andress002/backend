import Servicio, { Iservice } from "../models/servicio.model";
import { AppError } from "../utils/AppError";
import { Types } from "mongoose";

export const crearGestionService = async (data: Partial<Iservice>): Promise<Iservice> => {
  try {
    const nuevoServicio = await Servicio.create(data);

    return nuevoServicio;
  } catch (err: any) {
    throw new AppError('Error al crear un  nuevo servicio', 400);
  }
};


export const obtenerGestionService = async (): Promise<Iservice[]> => {
  try {
    const obtenerServicio = await Servicio.find();

    return obtenerServicio;
  } catch (err: any) {
    throw new AppError('Error para obtener los servicios', 400);
  }
};


export const obtenerGestionServiceId = async (id: Types.ObjectId | string): Promise<Iservice | null> => {
  try {
    const obtenerServicioID = await Servicio.findById(id);

    return obtenerServicioID
  } catch (err: any) {
    throw new AppError('Error para conseguir el servicio', 400)
  }
};


export const actualizarGestionService = async (id: Types.ObjectId | string, data: Partial<Iservice>): Promise<Iservice | null> => {
  try {
    return await Servicio.findByIdAndUpdate(id, data, { new: true });
  } catch (err: any) {
    throw new AppError('Error para actualizar el servicio', 400);
  }
};

export const eliminarGestionService = async (id: Types.ObjectId | string): Promise<Iservice | null> => {
  try {
    return await Servicio.findByIdAndUpdate(id);
  } catch (error) {
    throw new AppError('Error para Eliminar el servicio', 400);
  }
}